---
description: "Read the environmental option values that apply at a location."
---

# 🔌 Read effective claim options

Read the environmental option values that apply at a location.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `getClaimOptions`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("claims", {
  "action": "getClaimOptions",
  "dimensionId": "minecraft:overworld",
  "location": {
    "x": 10,
    "y": 70,
    "z": 20
  },
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of {optionId,enabled,usageType}, or null outside claims.

## Usage notes

Includes effective forced policy and subclaim overrides.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)
