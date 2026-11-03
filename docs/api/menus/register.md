---
description: "Add a Quests entry to the main menu."
---

# 🔌 Register a menu button

Add a Quests entry to the main menu.

**Endpoint:** `thm_rmt:api.menus`

**Action:** `register`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `parent` | String | RMT menu location: main, admin, moderation or technical. |
| `label` | String | Short menu button text. |
| `category` | String | Menu search/category label. |
| `permissions` | Array | Permission descriptions or gates, as described below. |
| `eventResponseId` | String | Your namespace’s channel for future notifications, not this request’s reply. |

## Example

```js
const reply = await request("menus", {
  "action": "register",
  "id": "quests",
  "parent": "main",
  "label": "Quests",
  "category": "My Addon",
  "permissions": [
    "my_addon:quests"
  ],
  "eventResponseId": "my_addon:open_quests"
});
console.warn(JSON.stringify(reply.result));
```

## Result

An object containing the full runtime menu ID.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "register",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "id": "menu.external.my_addon.quests"
  }
}
```

## Usage notes

Subscribe to your activation channel first. Parent is main, admin, moderation or technical. Each supplied permission must belong to your namespace; at least one must pass. Omit permissions for no extra node gate. Register descriptions through the permissions endpoint separately.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Menus actions →](/api/menus)

## Handle activation

```js
system.afterEvents.scriptEventReceive.subscribe(event => {
  if (event.id !== "my_addon:open_quests") return;
  let data;
  try { data = JSON.parse(event.message); } catch { return; }
  if (data.event !== "menuActivated") return;
  const player = world.getAllPlayers().find(p => p.id === data.playerId);
  if (!player) return;
  // Check your feature access and open your own UI for player.
});
```

Install before registration. The activation message is {event:"menuActivated",id:"menu.external.my_addon.quests",playerId:...}. It does not carry an ordinary requestId/result envelope.
