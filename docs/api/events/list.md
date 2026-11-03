---
description: "Browse definitions available to the Technical Events system."
---

# 🔌 List event definitions

Browse definitions available to the Technical Events system.

**Endpoint:** `thm_rmt:api.events`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("events", {
  "action": "list",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of event definitions and their field descriptions.

## Usage notes

This includes available event definitions, not only your addon’s custom events.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)
