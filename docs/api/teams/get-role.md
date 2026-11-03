---
description: "Read the player’s current role inside their team."
---

# 🔌 Read a team role

Read the player’s current role inside their team.

**Endpoint:** `thm_rmt:api.teams`

**Action:** `getRole`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("teams", {
  "action": "getRole",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

owner, admin, member, or null when unteamed.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "getRole",
  "requestId": "my_addon-1",
  "success": true,
  "result": "member"
}
```

## Usage notes

This is a team role, not the player’s realm permission group.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Teams actions →](/api/teams)
