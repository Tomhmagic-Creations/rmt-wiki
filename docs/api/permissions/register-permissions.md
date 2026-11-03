---
description: "Add descriptions so realm owners can find your addon’s nodes in the permission editor."
---

# 🔌 Describe addon permissions

Add descriptions so realm owners can find your addon’s nodes in the permission editor.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `registerPermissions`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `permissions` | Array | Permission descriptions or gates, as described below. |

## Example

```js
const reply = await request("permissions", {
  "action": "registerPermissions",
  "permissions": [
    {
      "key": "my_addon:quests",
      "name": "Open Quests",
      "description": "Allows players to open the quest menu."
    },
    {
      "key": "my_addon:quest_limit",
      "name": "Quest Limit",
      "description": "Maximum active quests.",
      "dataType": "number"
    }
  ]
});
console.warn(JSON.stringify(reply.result));
```

## Result

The number of definitions added. This example adds two.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "registerPermissions",
  "requestId": "my_addon-1",
  "success": true,
  "result": 2
}
```

## Definition fields

| Field | Required? | Rule |
| --- | --- | --- |
| key | Yes | Concrete node in your namespace; at most 256 characters |
| name | Yes | 1–64 plain-text characters |
| description | Yes | 1–256 plain-text characters |
| dataType | No | number or string; omit for an allow/deny node |

Names and descriptions cannot contain formatting codes, control characters or newlines. Definitions cannot be wildcards or value assignments such as homes.max=(5).

## Registration rules

Register after namespace registration, once per runtime. Send 1–25 definitions per batch, with at most 256 per namespace and 2,048 total.

A duplicate or invalid definition rejects the whole batch without replacing earlier definitions. Use additional non-overlapping batches for a larger catalogue.

## What this does not grant

Descriptions make nodes discoverable in the editor. The realm owner still assigns grants and limits to groups or players. This action does not create defaults or group memberships. Removing your runtime catalogue does not delete the owner's saved grants.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)
