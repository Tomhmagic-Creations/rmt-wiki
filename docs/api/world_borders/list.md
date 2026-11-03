---
description: "Browse dimensions and their saved border settings."
---

# 🔌 List configured borders

Browse dimensions and their saved border settings.

**Endpoint:** `thm_rmt:api.world_borders`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("world_borders", {
  "action": "list",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of per-dimension border settings.

## Usage notes

A disabled border remains a saved configuration.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other World Borders actions →](/api/world_borders)
