---
description: "Test a dimension and block position."
---

# 🔌 Check whether land is claimed

Test a dimension and block position.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `isInClaim`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |

## Example

```js
const reply = await request("claims", {
  "action": "isInClaim",
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

true when a claim area applies at the location; false otherwise.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "isInClaim",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

Use an actual dimension ID and finite x/y/z coordinates.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)
