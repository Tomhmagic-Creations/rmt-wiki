---
description: "Make your custom event type unavailable for this runtime."
---

# 🔌 Remove your event definition

Make your custom event type unavailable for this runtime.

**Endpoint:** `thm_rmt:api.events`

**Action:** `unregister`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("events", {
  "action": "unregister",
  "id": "quest_completed"
});
console.warn(JSON.stringify(reply.result));
```

## Result

null when the request is accepted.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "unregister",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

Owner-created bindings are retained. Re-registering the definition makes their reference available again.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)
