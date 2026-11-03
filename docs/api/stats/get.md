---
description: "Read the value supplied for an online player."
---

# 🔌 Read a runtime stat value

Read the value supplied for an online player.

**Endpoint:** `thm_rmt:api.stats`

**Action:** `get`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("stats", {
  "action": "get",
  "id": "quests",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A number, or null if no value has been supplied.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "get",
  "requestId": "my_addon-1",
  "success": true,
  "result": 3
}
```

## Usage notes

Null is unavailable, not an automatically valid zero.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stats actions →](/api/stats)
