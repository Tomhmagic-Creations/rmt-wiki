---
description: "Read the configured stat map and compatibility player statistics."
---

# 🔌 Read player statistics

Read the configured stat map and compatibility player statistics.

**Endpoint:** `thm_rmt:api.player_data`

**Action:** `getStats`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("player_data", {
  "action": "getStats",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object containing playerId, name, stats, kills, deaths, monsterKills, playtimeSeconds, joinDate, lastJoinDate and lastLeaveDate.

## Usage notes

The stats map uses stat IDs. Missing external values are null. Offline data is the stored state, not a live inventory/health query. Date fields retain the API’s stored representations.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Player data actions →](/api/player_data)
