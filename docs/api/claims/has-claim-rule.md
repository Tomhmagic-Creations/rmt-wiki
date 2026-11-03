---
description: "Ask whether an online player may perform one claim-controlled action."
---

# 🔌 Check a claim action

Ask whether an online player may perform one claim-controlled action.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `hasClaimRule`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |
| `trigger` | String | Claim action being checked. |
| `target` | Object | Actual block, entity, player or item-slot subjects for matching. |

## Example

```js
const reply = await request("claims", {
  "action": "hasClaimRule",
  "playerId": "PLAYER_ID",
  "dimensionId": "minecraft:overworld",
  "location": {
    "x": 10,
    "y": 70,
    "z": 20
  },
  "trigger": "interact_block",
  "target": {
    "block": {
      "dimensionId": "minecraft:overworld",
      "location": {
        "x": 10,
        "y": 70,
        "z": 20
      }
    }
  }
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A boolean representing the effective rule decision.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "hasClaimRule",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

The target block must be loaded. The top-level location chooses the claim. Supply the real target separately so type/tag filters work; RMT does not infer it from the position.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)

## Target fields

| target field | Value |
| --- | --- |
| block | {dimensionId, location} for the actual loaded target block |
| entityId | Loaded target entity ID |
| targetPlayerId | Online target player ID |
| itemSlot | Acting player’s zero-based inventory slot |

The request’s top-level dimensionId/location select the claim being checked. Target fields identify what the action acts on; they do not replace that lookup position. Supply multiple targets when an action involves both an item and a block/entity.
