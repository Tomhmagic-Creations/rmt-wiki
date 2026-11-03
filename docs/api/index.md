---
search: false
description: "Connect your addon, then choose the single endpoint and action you need."
---

# 🔌 API quick start

Connect your addon, then choose the single endpoint and action you need.


RMT’s API sends JSON through Minecraft script events. It is not an HTTP service. These examples belong in your addon's script.

## 1. Connect once

Copy the **Shared request helper** from the API menu into your integration module and give it your own namespace. It subscribes before sending and registers once after world load. Wait for successful registration before feature calls.

## 2. Pick a task

| You want to… | Endpoint |
| --- | --- |
| Check feature access or a limit | [Permissions](/api/permissions) |
| Check protected land | [Claims](/api/claims) |
| Read or publish dynamic text values | [Placeholders](/api/placeholders) |
| Create floating text | [Holograms](/api/holograms) |
| Read saved stats or land allowance | [Player data](/api/player_data) |
| Read team membership | [Teams](/api/teams) |
| Add navigation markers | [Waypoints](/api/waypoints) |
| Publish events or listen to RMT | [Events](/api/events) |
| Save your own persistent values | [Metadata](/api/metadata) |
| Publish a runtime numeric stat | [Stats](/api/stats) |
| Run an existing saved sequence | [Stored Commands](/api/stored_commands) |
| Check border policy | [World Borders](/api/world_borders) |
| Add a menu button | [Menus](/api/menus) |

## 3. Read the result

The helper matches requestId and returns the reply. Most feature replies have success and result. A permission result of false is a normal denied check, not a transport failure. Errors throw; catch them in your surrounding handler.

PLAYER_ID in an example means the actual player.id or recorded RMT player ID, not their displayed name. Example IDs such as CLAIM_ID or team_1 must be replaced with real records when required.

## 4. Know what lasts

External definitions, values, markers, menus and displays are runtime resources. Re-register after restart and republish player values on join. Metadata is persistent. The endpoint page describes its exact lifetime.

All endpoint headings in the API sidebar expand to individual action pages. Start with one action and its example rather than reading a combined contract.
