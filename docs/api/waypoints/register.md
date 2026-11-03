---
description: "Publish a quest destination marker for one online player."
---

# 🔌 Create or replace a waypoint

Publish a quest destination marker for one online player.

**Endpoint:** `thm_rmt:api.waypoints`

**Action:** `register`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | String | Local resource ID, unless the action states otherwise. |
| `name` | String | Readable display name. |
| `dimensionId` | String | Dimension ID for the query or destination. |
| `location` | Object | Finite block coordinates {x,y,z}. |
| `icon` | String | Supported marker icon. |
| `colour` | Object | RGB object with whole channels 0–255. |
| `playerIds` | Array | Explicit online player audience. |

## Example

```js
const reply = await request("waypoints", {
  "action": "register",
  "id": "quest_destination",
  "name": "Quest Destination",
  "dimensionId": "minecraft:overworld",
  "location": {
    "x": 10,
    "y": 70,
    "z": 20
  },
  "icon": "flag",
  "colour": {
    "red": 255,
    "green": 210,
    "blue": 0
  },
  "playerIds": [
    "PLAYER_ID"
  ]
});
console.warn(JSON.stringify(reply.result));
```

Replace PLAYER_ID with the actual Player.id or the registered ID required by this action. A display name is not a player ID.

## Result

An object containing the full external marker ID.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "register",
  "requestId": "my_addon-1",
  "success": true,
  "result": {
    "id": "external:my_addon:quest_destination"
  }
}
```

## Usage notes

Register the same local ID again to replace its definition. Use different IDs for simultaneous different destinations. Omit all audience filters for global visibility. playerIds, teamId and permission combine when supplied.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Waypoints actions →](/api/waypoints)
