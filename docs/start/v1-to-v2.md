---
description: "See what V2 converts, what behaves differently and which older setups are not imported."
---

# 📖 What carries over from V1

See what V2 converts, what behaves differently and which older setups are not imported.


This page describes the current conversion coverage. Some player data converts when that player returns, and some world entities convert when their area loads, so the first V2 world load is not the end of every conversion.

## 📌 Converted data

| V1 data | What V2 carries forward |
| --- | --- |
| Ranks and discovered assignments | Permission groups, names, coloured prefixes and discovered memberships |
| Rank priority | Converted to V2's ordering, where higher numeric priority wins |
| Supported feature switches and limits | Equivalent permission policies and numeric/dimension restrictions |
| Automatic rank awards | Once-per-player group automation; discovered existing recipients are marked awarded |
| Rank-restricted realm warps | Default deny and intended group allows for the warp's data permission |
| Claims and subclaims | Claimed land, explicit trusted-player lists and supported rule/option states |
| Claim allowance | Old remaining allowance plus occupied land, with supported pending offline changes |
| Protection-height settings | Per-dimension protected heights |
| Homes and player-local stats | Imported when that player returns |
| Eligible holograms | Text and ownership when old entities load, with placement adjusted for the new renderer |
| Supported kit definitions | Storage references, group filters and accessible legacy claim counts |
| Supported lock data | Retained through the current conversion/read paths |
| Existing valid announcements | Retain their frequency and enabled scheduling |

Renamed staff ranks are recognised through their old settings. An ordinary custom rank does not automatically become an administrator. Converted allowance's earned/bonus split may be estimated rather than a full reconstruction of past gifts.

## 📌 Changes that matter to players

| Before | In V2 |
| --- | --- |
| Ranks | Multiple permission groups and personal overrides |
| Global feature switches | Group/player permissions for many abilities and limits |
| Fixed claim categories | Configurable rules and None, Trusted, All or Team audiences |
| Claim Chunks | Claim Allowance, with separate Earned, Bonus, Used and Available balances |
| Chunk Viewer item | Personal setting; its old item state is not imported |
| Old hologram text entity | Native text display with an optional action hitbox |
| Fixed counters | Configurable Stats visible through Profile |
| Old inventory viewing | Live Inventory, Hotbar, Equipment and Ender Chest sections |
| Banned-item scan interval | Event-driven checks; no scan-frequency setting |

## 📌 Setups that are not equivalent or not imported

**Trusted ranks in claims:** V1 Rank and Rank + Trusted audiences become Trusted, preserving explicit trusted-player IDs. Old rank lists are not expanded into a continuing V2 group audience. Those players may no longer have access. Team rules refer to the main owner's current team and are not an exact substitute for arbitrary ranks.

**Interactive Commands:** the older structured action implementation has no automatic importer. V2 uses Stored Commands linked through Events, forms, NPCs, blocks, portals or holograms.

**Hologram actions:** current conversion creates empty hit/interact action lists. Converted text and ownership do not mean old interactions were imported.

**Saved inventories:** optional V2 logout snapshots are not an import of V1 inventory history. Native operators are excluded.

**Spectating:** Spy offers supported Spectator/Creative workflows; a separate camera-follow replacement is not provided.

**Group script events:** old giveRank/removeRank hooks are not current aliases. V2 uses supported group hooks or permission commands. The old editClaimBlocks compatibility event remains accepted alongside editClaimAllowance.

## 📌 New features

Teams, waypoints, reports, Action Log, custom loot, crates, Realm Store, managed scoreboards and expanded personal settings have their own V2 guides. Their presence does not imply that V1 had equivalent data to import.

Normal V2 restarts do not recreate deleted staff groups or restore deliberately removed permissions. For current usage, start with [Permissions](/admin/permissions), [Claims](/claims/getting-started) or [Technical features](/technical/).
