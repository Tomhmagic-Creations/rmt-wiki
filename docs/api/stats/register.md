---
description: "Add your addon’s stat definition to RMT."
---

# 🔌 Register a stat

Add your addon’s stat definition to RMT.

**Endpoint:** `thm_rmt:api.stats`

**Action:** `register`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `name` | String | Readable display name. |
| `description` | String | Readable description. |
| `visible` | Boolean | Whether the stat is visible in Profile. |

## Example

```js
const reply = await request("stats", {
  "action": "register",
  "id": "quests",
  "name": "Quests Completed",
  "description": "Completed quests from My Addon.",
  "visible": true
});
console.warn(JSON.stringify(reply.result));
```

## Result

An object containing the namespaced stat ID.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "register",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "id": "my_addon:quests"
  }
}
```

## Usage notes

Register once per runtime. visible defaults true; descriptions are optional. Duplicate IDs reject.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stats actions →](/api/stats)
