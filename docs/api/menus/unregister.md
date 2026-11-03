---
description: "Remove your runtime entry by its local ID."
---

# 🔌 Remove a menu button

Remove your runtime entry by its local ID.

**Endpoint:** `thm_rmt:api.menus`

**Action:** `unregister`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("menus", {
  "action": "unregister",
  "id": "quests"
});
console.warn(JSON.stringify(reply.result));
```

## Result

A removal boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "unregister",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

Related runtime Favourites are removed too. Other menu entries remain.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Menus actions →](/api/menus)
