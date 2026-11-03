---
description: "Publish the player’s current authoritative total."
---

# 🔌 Set a player’s stat

Publish the player’s current authoritative total.

**Endpoint:** `thm_rmt:api.stats`

**Action:** `set`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `value` | Number | Value to store, publish or add; must match the action’s accepted type. |

## Example

```js
const reply = await request("stats", {
  "action": "set",
  "id": "quests",
  "playerId": "PLAYER_ID",
  "value": 3
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

The newly published numeric value.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "set",
  "requestId": "my_addon-1",
  "success": true,
  "result": 3
}
```

## Usage notes

Use the local ID quests. Register first and use an online player. Republish the actual total after reconnect, rather than assuming the old runtime value remains.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stats actions →](/api/stats)
