---
description: "Add simple movement and building conveniences to your world."
---

# 🧱 Elevators, jump pads and doors

Add simple movement and building conveniences to your world.


## 📌 Elevators

1. Place elevator blocks at the same X/Z coordinates on different floors.
2. At each stop, leave air immediately below the elevator and a floor two blocks below it.
3. Interact to travel up to the next matching elevator.
4. Sneak and interact to travel down.

Elevators use block-interaction access and claim rules. This is direct same-dimension travel; build safe stops yourself rather than relying on the RTP landing search.

## 📌 Jump pads

Place a pad facing the cardinal direction you want to launch players, then configure it by interacting while holding:

| Item | Effect |
| --- | --- |
| Redstone | Cycles launch power from 1 to 4 |
| Vanilla dye | Changes colour |
| Lock item | Locks or unlocks pad configuration |

A locked pad ignores other configuration items. Its configuration lock is different from container ownership and trusted-player locks. Test the landing area at the chosen power.

## 📌 Doors

**Knock:** hit a vanilla door to play a knocking sound. Knocking does not open a locked door or grant access.

**Double doors:** interact with a correctly paired set of matching vanilla doors to synchronise them. The materials, facing and outer hinges must match the supported pairing. Both doors must be loaded, and access checks apply to both. These conveniences do not apply to trapdoors or arbitrary custom blocks.

See [Items and recipes](/reference/items) for current item identifiers and recipes.
