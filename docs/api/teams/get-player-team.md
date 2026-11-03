---
description: "Read the team the player currently belongs to."
---

# 🔌 Find a player’s team

Read the team the player currently belongs to.

**Endpoint:** `thm_rmt:api.teams`

**Action:** `getPlayerTeam`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("teams", {
  "action": "getPlayerTeam",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A team summary or null when unteamed.

## Usage notes

A player can belong to at most one team.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Teams actions →](/api/teams)
