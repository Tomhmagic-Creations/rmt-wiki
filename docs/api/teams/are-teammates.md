---
description: "Check whether two recorded player identities share a team."
---

# 🔌 Compare two players

Check whether two recorded player identities share a team.

**Endpoint:** `thm_rmt:api.teams`

**Action:** `areTeammates`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `otherPlayerId` | String | The second player’s recorded ID. |

## Example

```js
const reply = await request("teams", {
  "action": "areTeammates",
  "playerId": "PLAYER_ID",
  "otherPlayerId": "OTHER_PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "areTeammates",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

Two unteamed players are not teammates.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Teams actions →](/api/teams)
