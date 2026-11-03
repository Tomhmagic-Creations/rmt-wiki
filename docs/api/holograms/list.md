---
description: "Find your namespace’s current runtime displays."
---

# 🔌 List your holograms

Find your namespace’s current runtime displays.

**Endpoint:** `thm_rmt:api.holograms`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("holograms", {
  "action": "list",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of summaries containing local id, ownerId, dimensionId and location.

## Usage notes

Hidden or unloaded records still count toward quota.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Holograms actions →](/api/holograms)
