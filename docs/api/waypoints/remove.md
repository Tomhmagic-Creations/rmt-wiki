---
description: "Delete one marker by its local ID."
---

# 🔌 Remove a waypoint

Delete one marker by its local ID.

**Endpoint:** `thm_rmt:api.waypoints`

**Action:** `remove`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |

## Example

```js
const reply = await request("waypoints", {
  "action": "remove",
  "id": "quest_destination"
});
console.warn(JSON.stringify(reply.result));
```

## Result

A removal boolean.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "remove",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

Use quest_destination here, not the returned external:my_addon:quest_destination ID.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Waypoints actions →](/api/waypoints)
