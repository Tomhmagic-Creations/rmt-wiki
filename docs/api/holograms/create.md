---
description: "Place your addon’s text at a world location."
---

# 🔌 Create a hologram

Place your addon’s text at a world location.

**Endpoint:** `thm_rmt:api.holograms`

**Action:** `create`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `ownerId` | String | A player owner registered with RMT. |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |
| `text` | Array | Text template or display lines, as shown. |
| `options` | Object | Optional display settings for this operation. |

## Example

```js
const reply = await request("holograms", {
  "action": "create",
  "id": "quest_board",
  "ownerId": "PLAYER_ID",
  "dimensionId": "minecraft:overworld",
  "location": {
    "x": 10,
    "y": 70,
    "z": 20
  },
  "text": [
    "Quest Board",
    "Speak to the guide to begin."
  ],
  "options": {
    "scale": 1,
    "maximumRenderDistance": 32
  }
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object containing the local id.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "create",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "id": "quest_board"
  }
}
```

## Usage notes

Use 1–32 text lines, at most 4,096 total characters. The owner must be registered with RMT. Limits: 100 per namespace, 50 per player owner including ordinary displays, 500 external total. A duplicate ID errors.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Holograms actions →](/api/holograms)
