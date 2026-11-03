---
description: "Remove the runtime display and its interaction hitbox."
---

# 🔌 Remove a hologram

Remove the runtime display and its interaction hitbox.

**Endpoint:** `thm_rmt:api.holograms`

**Action:** `remove`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("holograms", {
  "action": "remove",
  "id": "quest_board"
});
console.warn(JSON.stringify(reply.result));
```

## Result

A removal boolean; false when absent.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "remove",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

Removing a display does not remove the player owner or a stored command referenced by it.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Holograms actions →](/api/holograms)
