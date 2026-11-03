---
description: "Save your addon’s world, player or non-player entity values."
---

# 🔌 Metadata API

Save your addon’s world, player or non-player entity values.

**Endpoint:** `thm_rmt:api.metadata`

Use local keys in calls; RMT stores them with your namespace. This is feature data, not secret storage.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Save a metadata value](/api/metadata/set) | `set` | Store persistent quest progress for a registered player. |
| [Read a metadata value](/api/metadata/get) | `get` | Read your namespace’s stored progress for a player. |
| [List metadata keys](/api/metadata/list) | `list` | List your namespace’s local keys in a scope. |
| [Remove a metadata value](/api/metadata/remove) | `remove` | Delete one key without touching unrelated keys. |

## Example: restore quest progress after restart

Save quest_progress with scope player. After fresh namespace registration, read it again using the same local key and player ID. A missing value is null; zero and false remain real values.

For a global event flag, use scope world with key event_enabled and value true, without playerId.

## Data lifetime

Persistent. Metadata survives namespace unregister/restart. Player purge removes that player’s keys.

## Field limits and options

Keys are local to your namespace and must fit the existing 128-character limit including the namespace. The underlying world/player scope supports 256 keys and text up to 32,000 UTF-8 bytes. Entity scope requires a loaded non-player entity; use player scope for a player. World/entity metadata is not deleted merely because a value happens to contain a player ID.
