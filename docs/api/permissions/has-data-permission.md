---
description: "Check access to a value-specific permission, such as a particular destination."
---

# 🔌 Check a data permission

Check access to a value-specific permission, such as a particular destination.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `hasDataPermission`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | The exact permission node or data-permission root/value being checked. |

## Example

```js
const reply = await request("permissions", {
  "action": "hasDataPermission",
  "playerId": "PLAYER_ID",
  "key": "thm_rmt:warp=(vip_lounge)"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A boolean allow/deny result.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "hasDataPermission",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Usage notes

This checks the destination data node, not all travel feature, command, claim or border requirements.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Permissions actions →](/api/permissions)

## Optional runtime context

These online checks accept an options object when the action has target-specific context.

| options field | Value |
| --- | --- |
| dimensionId | Actual action dimension ID |
| location | Action block coordinates; requires dimensionId |
| block | {dimensionId, location} for a loaded target block |
| entityId | Loaded target entity ID |
| targetPlayerId | Online target player ID |
| itemSlot | Acting player’s zero-based inventory slot |

Supply real targets when a contextual grant depends on them. Unknown fields, unavailable entities, empty item slots or unloaded blocks fail validation. Offline-ID checks do not accept these options.
