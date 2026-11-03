---
description: "Read entitlement, used land and the remaining available balance."
---

# 🔌 Read Claim Allowance

Read entitlement, used land and the remaining available balance.

**Endpoint:** `thm_rmt:api.player_data`

**Action:** `getClaimAllowance`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |

## Example

```js
const reply = await request("player_data", {
  "action": "getClaimAllowance",
  "playerId": "PLAYER_ID"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object with earned, bonus, lifetimeAutoEarned, used and available.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "getClaimAllowance",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "earned": 20,
    "bonus": 5,
    "lifetimeAutoEarned": 10,
    "used": 12,
    "available": 13
  }
}
```

## Usage notes

Available is max(0, earned + bonus − used). Lifetime Auto Earnings is not the current available balance. This endpoint cannot grant or edit allowance.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Player data actions →](/api/player_data)
