---
description: "Find and run an existing sequence authored by the realm owner."
---

# 🔌 Stored Commands API

Find and run an existing sequence authored by the realm owner.

**Endpoint:** `thm_rmt:api.stored_commands`

The runner uses existing executor permissions and its 200-command budget. Success is not proof that a deferred external reward completed.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [List saved sequences](/api/stored_commands/list) | `list` | Find the available Stored Command IDs. |
| [Check a sequence ID](/api/stored_commands/exists) | `exists` | Check whether a named sequence currently exists. |
| [Run a saved sequence](/api/stored_commands/run) | `run` | Execute an owner-defined reward as an online player. |

## Example: owner-defined quest rewards

Ask the owner to create quest_reward in Technical > Stored Commands. Check its ID exists, then run with the real online playerId.

For a location-only sequence, omit playerId and supply both dimensionId and location. Dimension execution has no @s.

## Data lifetime

Saved sequences belong to the realm. This API does not create or edit them.
