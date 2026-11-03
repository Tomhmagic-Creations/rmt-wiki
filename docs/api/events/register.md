---
description: "Make a new event type available in Technical > Events > When."
---

# 🔌 Register a custom event

Make a new event type available in Technical > Events > When.

**Endpoint:** `thm_rmt:api.events`

**Action:** `register`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `fields` | Array | Flat custom event field definitions. |

## Example

```js
const reply = await request("events", {
  "action": "register",
  "id": "quest_completed",
  "fields": [
    {
      "path": "quest",
      "kind": "string"
    },
    {
      "path": "reward",
      "kind": "number"
    }
  ]
});
console.warn(JSON.stringify(reply.result));
```

## Result

An object containing the namespaced event ID.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "register",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "id": "my_addon:quest_completed"
  }
}
```

## Usage notes

Register 0–16 flat fields, with kinds string, number, boolean, vector or entity. Every event also has an optional player subject; do not redefine player. Field paths cannot contain dots. Duplicate IDs reject.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Events actions →](/api/events)
