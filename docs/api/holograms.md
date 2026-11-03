---
description: "Create, read, update and remove floating text owned by your integration."
---

# 🔌 Holograms API

Create, read, update and remove floating text owned by your integration.

**Endpoint:** `thm_rmt:api.holograms`

Use local IDs in calls. A registered player owns each display, including when an offline registered owner is used for creation. Normal RMT-created holograms are separately saved.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Create a hologram](/api/holograms/create) | `create` | Place your addon’s text at a world location. |
| [Read a hologram](/api/holograms/get) | `get` | Read the runtime record for one of your local display IDs. |
| [List your holograms](/api/holograms/list) | `list` | Find your namespace’s current runtime displays. |
| [Update a hologram](/api/holograms/update) | `update` | Change exactly one part of an existing display. |
| [Remove a hologram](/api/holograms/remove) | `remove` | Remove the runtime display and its interaction hitbox. |

## Example: a changing quest board

Create quest_board after namespace registration. Change its text when quest availability changes, and remove it when no longer needed. Recreate it after a fresh runtime with an appropriate registered owner.

## Update appearance or position

The update action also accepts options alone, for example {scale:1.5}, or location plus dimensionId alone. Send these as separate updates, not alongside text.

## Data lifetime

External holograms are runtime-only. They disappear on restart, namespace removal or owner departure/purge.

## Display options

| Option | Accepted values |
| --- | --- |
| scale | 0.1–10 |
| lineGapHeight | 0–10 |
| maximumRenderDistance | 1–256 |
| runtimeChunkRadius | Whole number 0–16 |
| timeLeft | 0–31,536,000 seconds; zero expires immediately |
| rotation | Vector with x, y and z |
| color / backgroundColorOverride | RGBA object; each channel 0–1 |
| hitbox | Width and height, each 1–5 |
| backfaceVisible / depthTest / textBackfaceVisible / useRotation / visableToPerm | Booleans; visableToPerm retains its API spelling |
| hitActions / interactActions | Up to 20 existing Stored Command IDs each |

Local IDs use 1–128 letters, digits, underscore, dot or hyphen. Text has 1–32 lines and at most 4,096 total characters. See the Create action for quotas and the Update action for operation rules.
