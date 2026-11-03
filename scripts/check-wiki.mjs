import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root = path.resolve('docs');
function walk(dir) { return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.name.startsWith('.')?[]:e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]); }
let errors=0;
const config=fs.readFileSync(path.join(root,'.vitepress/config.mts'),'utf8');
const navStart=config.indexOf('    nav: '),sidebarStart=config.indexOf('    sidebar: '),sidebarEnd=config.indexOf(',\n    docFooter:',sidebarStart);
const nav=JSON.parse(config.slice(navStart+'    nav: '.length,sidebarStart).trim().replace(/,$/,''));
const sidebar=JSON.parse(config.slice(sidebarStart+'    sidebar: '.length,sidebarEnd));
function checkNavigation(entries){
 for(const entry of entries){
  if(entry.link?.startsWith('/')){
   const target=path.join(root,entry.link.split('#')[0]);
   if(![target+'.md',path.join(target,'index.md')].some(t=>fs.existsSync(t))){console.error('Missing navigation target',entry.link);errors++;}
  }
  if(entry.items)checkNavigation(entry.items);
 }
}
checkNavigation(nav);
for(const groups of Object.values(sidebar))checkNavigation(groups);
for(const entry of nav)if(entry.link||!entry.items?.length){console.error('Expected a dropdown heading',entry.text);errors++;}
const coverageFile=path.resolve('scripts/api-action-coverage.json');
if(fs.existsSync(coverageFile)){
 const coverage=JSON.parse(fs.readFileSync(coverageFile,'utf8'));
 let actionCount=0;
 for(const endpoint of coverage.endpoints){
  const overview=path.join(root,'api',endpoint.id+'.md');
  if(!fs.existsSync(overview)){console.error('Missing API endpoint guide',endpoint.id);errors++;}
  const seen=new Set();
  for(const action of endpoint.actions){
   actionCount++;
   if(seen.has(action.id)){console.error('Duplicate API action',endpoint.id,action.id);errors++;}
   seen.add(action.id);
   const file=path.join(root,action.link+'.md');
   if(!fs.existsSync(file)){console.error('Missing API action guide',action.link);errors++;continue;}
   const text=fs.readFileSync(file,'utf8');
   if(!text.includes('**Action:** `'+action.id+'`')||!text.includes('```js')||!text.includes('## Result')){console.error('Incomplete API action guide',action.link);errors++;}
  }
 }
 if(actionCount!==coverage.examples){console.error('API action inventory count differs from documented examples');errors++;}
}
for(const file of walk(root).filter(f=>f.endsWith('.md'))) {
 let fenced=false;
 const content=fs.readFileSync(file,'utf8');
 for (const block of content.matchAll(/```json\s*\n([\s\S]*?)```/g)) {
   try { JSON.parse(block[1]); }
   catch(error) { console.error('Invalid JSON example',path.relative(root,file),error.message);errors++; }
 }
 for (const block of content.matchAll(/```js\s*\n([\s\S]*?)```/g)) {
   const js=block[1].replace(/^import .*;\s*$/gm,'');
   try { new vm.Script('(async function () {\n'+js+'\n})'); }
   catch(error) { console.error('Invalid JavaScript example',path.relative(root,file),error.message); errors++; }
 }
 content.split(/\r?\n/).forEach((line,i)=>{
   if(line.startsWith('```')) fenced=!fenced;
   else if(!fenced && /<[A-Za-z]/.test(line.replace(/`[^`]*`/g,'').replace(/<\/?(?:div|a|strong|span|br|iframe)(?:\s[^>]*)?>/g,''))) {console.error('Unexpected HTML',path.relative(root,file),i+1,line);errors++;}
 });
 for(const match of content.matchAll(/\]\(([^)]+)\)|href="([^"]+)"/g)) {
   const url=match[1]??match[2];
   if(/^(?:https?:|mailto:|#)/.test(url))continue;
   const raw=url.split('#')[0];
   const target=raw.startsWith('/')?path.join(root,raw):path.resolve(path.dirname(file),raw);
   if(![target,target+'.md',path.join(target,'index.md'),path.join(root,'public',raw)].some(t=>fs.existsSync(t))) {console.error('Missing link',path.relative(root,file),url);errors++;}
 }
 if(fenced){console.error('Unclosed code fence',file);errors++;}
}
console.log(`Links, navigation, API coverage, code fences, JavaScript and JSON syntax: ${errors} errors.`);
process.exitCode=errors?1:0;
