---
description: "Read the allow/deny decision and its available matching details."
---

# 🔌 Explain a permission decision

Read the allow/deny decision and its available matching details.

**Endpoint:** `thm_rmt:api.permissions`

**Action:** `getPermission`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `playerId` | String | Acting/queried player’s ID; see the action’s online/offline requirements. |
| `key` | String | The exact permission node or data-permission root/value being checked. |

## Example

```js
const reply = await request("permissions", {
  "action": "getPermission",
  "playerId": "PLAYER_ID",
  "key": "my_addon:quests"
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object with key, allowed and matchedWildcard, plus matchedNode/matchedKey when available.

## Usage notes

Use allowed for the decision. Matching fields help diagnostics; their absence is not itself an error.

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
