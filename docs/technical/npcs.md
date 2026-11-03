---
description: "Place characters, customise their appearance and attach useful interactions."
---

# 🛠️ NPCs

Place characters, customise their appearance and attach useful interactions.


## 📌 Place and style an NPC

1. Use **NPC Add** on a block.
2. Use **NPC Edit** on the NPC.
3. Set its name, appearance, colours, scale, rotation, pose and behaviour.
4. Save each change and inspect the character in the world.

Appearance cycling tools move forward on interact and backward on hit. An empty blueprint captures appearance; apply a filled blueprint to another NPC to reuse it. Blueprints copy appearance, not names, behaviour or privileged actions.

## 📌 Add one interaction

1. Create the [form](/technical/custom-forms) or [Stored Command](/technical/stored-commands) you want to use.
2. Open the NPC Editor and choose **Interact Actions** or **Hit Actions**.
3. Add the saved reference and order the list.
4. Test using an ordinary gameplay item rather than an editing tool.

Each trigger supports up to 20 actions and one custom-form action. Editing tools do not activate gameplay actions. Commands run as the activating player without operator elevation; form access is still checked.

If an action opens a form, later actions wait for it to close. Moving over eight blocks away, changing dimension, leaving or changing the action configuration can invalidate that interaction.

## 📌 Behaviour and paths

Choose **Static**, **Random Wander**, **Wander Around Home** or **Follow Path** in Behaviour. Home wandering captures the NPC's current location when you enable that mode. Switch away and back to capture a different home. Look at Player and Look Around are separate toggles. Only Static supports disabling gravity.

## 📌 Set up a path

1. Hold the **NPC Target Selector** and hit or interact with the NPC to select and pause it for editing.
2. Use the selector on blocks to add points at the centre of the block above each clicked block.
3. Stay within 64 blocks of the NPC. New or moved points must also be within 64 blocks of it, including vertical distance.
4. Sneak-hit/interact with the selected NPC to open its Path menu, or use the normal NPC Editor.
5. Inspect the point list, choose Loop Path if wanted and save.
6. Use Start/Stop to test the route. A non-looping path stops at its last point.

In normal selector editing, clicking an existing point removes it. Point details offer Insert After, Move Point, Move Up/Down and Remove. Insert/Move uses your next selector block click for the new location. Clear Path requires confirmation. Paths support up to 64 points in the NPC's dimension.

The preview is private to editors holding the selector. Lines show the route; non-looping routes with multiple points distinguish start and stop. A visual pose such as Lie Down does not change the configured movement behaviour.

Use `npcPathPointReached` in Events when an arrival should trigger another action; `pointIndex` starts at zero. Run arrival commands as the NPC rather than its temporary target marker. This event has no player actor, so player-only placeholders are not suitable without an explicit supported player context.

The [information NPC tutorial](/tutorials/information-npc) combines an NPC, custom form and travel action. NPC movement and native visuals should also be checked in Minecraft at the intended location.
