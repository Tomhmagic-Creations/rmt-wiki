---
description: "Browse current team summaries."
---

# 🔌 List teams

Browse current team summaries.

**Endpoint:** `thm_rmt:api.teams`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("teams", {
  "action": "list",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of team summaries.

## Usage notes

Each summary contains id, name, ownerId, memberIds, adminIds, public, pvp and revision.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Teams actions →](/api/teams)
