---
description: "Test whether a block position is inside the allowed border."
---

# 🔌 Check border geometry

Test whether a block position is inside the allowed border.

**Endpoint:** `thm_rmt:api.world_borders`

**Action:** `contains`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |

## Example

```js
const reply = await request("world_borders", {
  "action": "contains",
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

A boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "contains",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

This geometric query does not test a player’s bypass, claims or safe landing.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other World Borders actions →](/api/world_borders)
