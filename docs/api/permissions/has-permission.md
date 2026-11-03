---
description: "Find out whether an online player may use a feature."
---

# 🔌 Check one permission

Find out whether an online player may use a feature.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `hasPermission`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | The exact permission node or data-permission root/value being checked. |

## Example

```js
const reply = await request("permissions", {
  "action": "hasPermission",
  "playerId": "PLAYER_ID",
  "key": "my_addon:quests"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

A boolean: true allows the checked node; false denies it. A false result is still a successful API query.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "hasPermission",
  "requestId": "my_addon-1",
  "success": true,
  "result": true
}
```

## Use the decision

```js
try {
  const { result: allowed } = await request("permissions", {
    action: "hasPermission", playerId: player.id, key: "my_addon:quests"
  });
  if (allowed !== true) {
    player.sendMessage("You cannot open quests.");
    return;
  }
  // Open your quest UI for this player.
} catch (error) {
  console.warn("Quest access could not be checked: " + String(error));
}
```

Here player is the real online Player from your gameplay handler. This example checks access rather than just printing a reply.

## Usage notes

Use this before opening your own feature. The realm owner must have granted the node; registering its description is not a grant.

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
