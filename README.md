# RMT V2 development wiki

This VitePress checkout contains the V2 wiki rewrite for the `dev` branch. The existing Netlify production project must keep `main` as its production branch. No deployment or DNS changes are part of this rewrite.

## Local use

```sh
npm install
npm run docs:dev
npm run docs:check
npm run docs:build
```

On Windows PowerShell with restricted script execution, use `npm.cmd` instead of `npm`. Netlify's build command remains `npm run docs:build`, with `docs/.vitepress/dist` as its publish directory.

## Content

Articles are organised under `start`, `players`, `claims`, `building`, `moderation`, `admin`, `technical`, `tutorials`, `api` and `reference`. The navigation is in `docs/.vitepress/config.mts`; presentation styles are in `docs/.vitepress/theme/style.css`.

Keep audience boundaries clear. Player guides explain using features and managing personally owned content. Moderator guides explain investigation and authorised staff actions. Realm policy, permission assignments, claim-rule definitions, earning rates and feature setup belong in Admin. Technical feature creation is also administrator material. A team admin or delegated claim manager is a player role within that feature, distinct from a realm administrator.

Top-level navigation labels open dropdowns rather than section landing pages. List real articles and reference pages directly. Permission definitions are divided among eight catalogue pages under `docs/reference/permissions`; keep them visible in Admin and reference sidebars rather than adding an unlisted appendix or a giant page reached only from a paragraph link.

Feature guides explain individual workflows. Tutorials combine features and include verification steps. API examples use request/reply correlation and deliberately distinguish runtime registration from persistent metadata. The V1-to-V2 article describes conversion coverage and differences, without a migration procedure.

API documentation has one overview per feature endpoint and one page per action. Keep request inputs, examples and result descriptions together on the action page. The quick start and shared request helper are separate from endpoint reference. `scripts/api-action-coverage.json` records the documented endpoint/action inventory; update it alongside new API actions.

The editorial source is the addon documentation at:

```text
D:\Tomhmagic Creations\Projects\Addons\Realm Management Tool\Realm-Management-Tool\docs
```

The rewrite follows that documentation as supplied on 3 November 2026. It does not modify addon source or claim to verify Minecraft engine behaviour. API permission/claim response shapes were also checked against the local endpoint implementations. Reference pages retain the documented command, permission, setting, placeholder and event contracts. Refresh them when the addon changes; do not restore implementation paths or development-only commands to player guides.

Older `/pages/...` URLs have short handoff pages with links to their V2 replacement. These pages and the former VitePress demo pages are excluded from local search.

## Before public V2 release

The development wiki has a visible V2 DEV label and a global `noindex, nofollow` robots meta tag. Remove the development label, home-page development note and robots meta tag when preparing the public release. Search-engine exclusion is not access control.

Review the guides in Minecraft with ordinary players as well as operators. Commands that schedule work do not prove that a deferred reward completed. The API examples are syntax-checked, not executed inside Minecraft. Test native rendering, NPC movement and form layout on the intended clients.
