---
description: "Find the available Stored Command IDs."
---

# 🔌 List saved sequences

Find the available Stored Command IDs.

**Endpoint:** `thm_rmt:api.stored_commands`

**Action:** `list`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `offset` | Number | Zero-based list offset; default 0. |
| `limit` | Number | Page size, 1–25; default 10. |

## Example

```js
const reply = await request("stored_commands", {
  "action": "list",
  "offset": 0,
  "limit": 10
});
console.warn(JSON.stringify(reply.result));
```

## Result

A paginated list of {id} entries.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "list",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "items": [
      {
        "id": "quest_reward"
      }
    ],
    "total": 1,
    "offset": 0,
    "nextOffset": null
  }
}
```

## Usage notes

Use the stored ID, not a command string.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stored Commands actions →](/api/stored_commands)
