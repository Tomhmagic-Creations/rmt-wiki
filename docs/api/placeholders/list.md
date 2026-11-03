---
description: "Search the registered placeholder catalogue."
---

# 🔌 Find placeholders

Search the registered placeholder catalogue.

**Endpoint:** `thm_rmt:api.placeholders`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `search` | String | Catalogue key search text. |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("placeholders", {
  "action": "list",
  "search": "player_name",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of key, description, examples and returns metadata.

## Usage notes

Search matches keys. This catalogue includes built-in and registered external placeholders.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Placeholders actions →](/api/placeholders)
