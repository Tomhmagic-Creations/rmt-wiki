---
description: "Read an assigned limit or string from an online player’s permissions."
---

# 🔌 Read a permission value

Read an assigned limit or string from an online player’s permissions.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `getDataPermission`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | The exact permission node or data-permission root/value being checked. |

## Example

```js
const reply = await request("permissions", {
  "action": "getDataPermission",
  "playerId": "PLAYER_ID",
  "key": "thm_rmt:homes.max"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object containing allowed and matchedWildcard, with value and match details when available.

## Use a numeric limit

```js
const { result } = await request("permissions", {
  action: "getDataPermission", playerId: player.id, key: "thm_rmt:homes.max"
});
if (result.allowed && typeof result.value === "number") {
  player.sendMessage("Your home limit is " + result.value);
} else if (result.allowed && result.matchedWildcard) {
  player.sendMessage("Your home capacity is unrestricted by this node.");
} else {
  player.sendMessage("No usable numeric home limit is assigned.");
}
```

Catch rejected requests in the surrounding action handler.

## Usage notes

Only use value when allowed is true and its type is appropriate. A covering wildcard means unrestricted data access; do not interpret a missing value as an automatic zero.

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
