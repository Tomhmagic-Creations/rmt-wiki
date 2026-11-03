---
description: "Stop notifications for one local subscription ID."
---

# 🔌 Stop a subscription

Stop notifications for one local subscription ID.

**Endpoint:** `thm_rmt:api.events`

**Action:** `unsubscribe`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("events", {
  "action": "unsubscribe",
  "id": "afk_notifications"
});
console.warn(JSON.stringify(reply.result));
```

## Result

A deletion boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "unsubscribe",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

This does not unregister a custom event definition.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)
