---
description: "Read the runtime record for one of your local display IDs."
---

# 🔌 Read a hologram

Read the runtime record for one of your local display IDs.

**Endpoint:** `thm_rmt:api.holograms`

**Action:** `get`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("holograms", {
  "action": "get",
  "id": "quest_board"
});
console.warn(JSON.stringify(reply.result));
```

## Result

The display record, or null if it does not exist.

## Usage notes

This is your namespace’s display, not a lookup into another addon’s or ordinary RMT-owned displays.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Holograms actions →](/api/holograms)
