---
description: "Read a dimension’s settings and calculated block bounds."
---

# 🔌 Read one border

Read a dimension’s settings and calculated block bounds.

**Endpoint:** `thm_rmt:api.world_borders`

**Action:** `get`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `dimensionId` | String | Dimension ID for the query or destination. |

## Example

```js
const reply = await request("world_borders", {
  "action": "get",
  "dimensionId": "minecraft:overworld"
});
console.warn(JSON.stringify(reply.result));
```

## Result

An object containing dimensionId, saved border settings and bounds; bounds is null when disabled.

## Usage notes

Use the returned bounds rather than treating chunk size as a block radius.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other World Borders actions →](/api/world_borders)
