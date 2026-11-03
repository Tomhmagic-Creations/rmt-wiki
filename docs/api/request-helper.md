---
description: "Copy this helper once into your addon script; the endpoint examples call its request function."
---

# 🔌 Shared request helper

Copy this helper once into your addon script; the endpoint examples call its request function.


This is Minecraft JavaScript, not a chat command or Stored Command. Use your addon's compatible @minecraft/server dependency. Keep these functions in the same module as your integration code, or export/import them yourself.

## Helper code

```js
import { system, world } from "@minecraft/server";

const namespace = "my_addon";
const replyChannel = "my_addon:rmt_reply";
const pending = new Map();
let serial = 0;
let registration;

system.afterEvents.scriptEventReceive.subscribe(event => {
  if (event.id !== replyChannel) return;
  let reply;
  try { reply = JSON.parse(event.message); } catch { return; }
  const job = pending.get(reply.requestId);
  if (!job) return;
  pending.delete(reply.requestId);
  system.clearRun(job.timer);
  if (reply.success) job.resolve(reply);
  else job.reject(new Error(reply.error ?? "RMT request failed"));
});

function request(endpoint, payload = {}) {
  const requestId = namespace + "-" + (++serial);
  return new Promise((resolve, reject) => {
    const timer = system.runTimeout(() => {
      pending.delete(requestId);
      reject(new Error("RMT request timed out: " + endpoint));
    }, 100);
    pending.set(requestId, { resolve, reject, timer });
    try {
      system.sendScriptEvent("thm_rmt:api." + endpoint, JSON.stringify({
        ...payload, namespace, responseId: replyChannel, requestId
      }));
    } catch (error) {
      pending.delete(requestId);
      system.clearRun(timer);
      reject(error);
    }
  });
}

function connectRMT() {
  // Keep a successful or pending registration; do not register twice.
  return registration ??= request("register");
}

let starting = false;
async function startIntegration() {
  if (starting) return;
  starting = true;
  try {
    await connectRMT();
    // Register your resources here, then publish initial values.
    console.warn("Connected to RMT");
  } catch (error) {
    console.warn("RMT unavailable: " + String(error));
  }
}

system.afterEvents.scriptEventReceive.subscribe(event => {
  if (event.id === "thm_rmt:api.ready") void startIntegration();
});
world.afterEvents.worldLoad.subscribe(() => {
  // Also handles load order; the local guard prevents duplicate startup.
  system.run(() => { void startIntegration(); });
});

```

## Where endpoint examples go

Replace the comment inside startIntegration for one-time definition registration. Put player-specific requests in your gameplay/join handlers after the connection has completed. In those handlers, await connectRMT first and catch errors.

Replace my_addon with a unique namespace throughout, including replyChannel. The helper fills namespace, responseId and a unique requestId automatically. request("teams", ...) sends to thm_rmt:api.teams.

## Handle failure

The timeout is 100 game ticks, about five seconds at normal tick rate. A timeout means the reply was not received, not proof that the original operation never ran. Do not automatically repeat a registration, purchase or reward.

The helper rejects success:false replies; successful replies can still contain result:false or result:null. Interpret those according to the specific action page.
