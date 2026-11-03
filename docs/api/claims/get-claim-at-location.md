---
description: "Read the owner and identity of protected land at a position."
---

# 🔌 Find a claim

Read the owner and identity of protected land at a position.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `getClaimAtLocation`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |

## Example

```js
const reply = await request("claims", {
  "action": "getClaimAtLocation",
  "dimensionId": "minecraft:overworld",
  "location": {
    "x": 10,
    "y": 70,
    "z": 20
  }
});
console.warn(JSON.stringify(reply.result));
```

## Result

An object with claimId, ownerId, name and subclaim (summary or null), or null outside claimed land.

## Usage notes

Use the returned claimId for claim-metadata calls. Do not substitute a display name.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)
