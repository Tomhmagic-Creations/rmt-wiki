---
description: "Evaluate border-bypass access for an online player at a location."
---

# 🔌 Check a player’s bypass

Evaluate border-bypass access for an online player at a location.

**Endpoint:** `thm_rmt:api.world_borders`

**Action:** `bypasses`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |

## Example

```js
const reply = await request("world_borders", {
  "action": "bypasses",
  "playerId": "PLAYER_ID",
  "dimensionId": "minecraft:overworld",
  "location": {
    "x": 10,
    "y": 70,
    "z": 20
  }
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A contextual bypass boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "bypasses",
  "requestId": "my_addon-1",
  "success": true,
  "result": false
}
```

## Usage notes

Supply the actual action dimension and location. This does not bypass unrelated claims or locks.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other World Borders actions →](/api/world_borders)
