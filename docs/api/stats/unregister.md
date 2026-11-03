---
description: "Remove your runtime stat and all its supplied values."
---

# 🔌 Remove a stat definition

Remove your runtime stat and all its supplied values.

**Endpoint:** `thm_rmt:api.stats`

**Action:** `unregister`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("stats", {
  "action": "unregister",
  "id": "quests"
});
console.warn(JSON.stringify(reply.result));
```

## Result

null when accepted.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "unregister",
  "requestId": "my_addon-1",
  "success": true,
  "result": null
}
```

## Usage notes

Owner configuration referencing it stays saved but the source is unavailable until registered again.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Stats actions →](/api/stats)
