---
description: "Read runtime button IDs belonging to your namespace."
---

# 🔌 List your menu entries

Read runtime button IDs belonging to your namespace.

**Endpoint:** `thm_rmt:api.menus`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("menus", {
  "action": "list",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of {id} entries.

## Usage notes

Returned IDs are full menu IDs, not the local IDs used in requests.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Menus actions →](/api/menus)
