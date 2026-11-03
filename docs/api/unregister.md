---
description: "Release your namespace and its runtime resources when the integration is shutting down."
---

# 🔌 Unregister your addon

Release your namespace and its runtime resources when the integration is shutting down.


**Endpoint:** `thm_rmt:api.unregister`. No action field is required.

## Example

```js
const reply = await request("unregister");
console.warn(reply.success);
```

The namespace must currently be registered. A successful reply includes requestId and success:true; it has no ordinary result value.

## What is removed?

Your runtime definitions, supplied values, menus, subscriptions, external markers and external displays are released. Persistent metadata and realm-owner configuration, including saved grants, Stored Commands and Event bindings, are retained.

Stop sending requests afterwards. Do not call the cached connectRMT helper again expecting it to recreate a registration it already completed. For a deliberate reconnect, build and test a fresh lifecycle; ordinary use should register once for the runtime.
