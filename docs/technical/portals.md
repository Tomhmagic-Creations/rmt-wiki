---
description: "Select an entry area that runs actions or sends players to Spawn or RTP."
---

# 🛠️ Portals

Select an entry area that runs actions or sends players to Spawn or RTP.


**Find it:** Technical > Portals. Portals are realm-administered, not personal player destinations.

1. Choose **Add** to receive a Portal Wand and start selection.
2. Use the wand on two block faces to select opposite corners. Each selected position is adjacent to the face you clicked.
3. Choose a name, render shape, colour and enabled state.
4. Review entry actions. New portals default to Random Teleport.
5. Save, walk out of the area and enter it to test.

Use the wand in air to open the portal list. A selection expires after five minutes or a dimension change. Move/Resize makes a fresh draft and does not move the saved portal until you save it.

## 📌 Shapes and actions

Choose a box or an X/Y, Y/Z or X/Z plane. A plane must be one selected block thick along its perpendicular axis. The activation area is the selected volume, not merely the thin visible plane.

Add existing Stored Commands in order. At most one built-in travel action is allowed, and it must be last. There may be up to 20 actions total.

RTP retains feature permissions, cooldown, dimension rules and safe landing checks, but skips the movement-cancellable warm-up. Stored Commands execute as the entering player without operator elevation.

## 📌 Entry behaviour

Actions trigger on entering, not repeatedly while standing inside. Creating a portal around someone or joining inside one does not immediately run it. Portals cannot overlap, and a short cross-portal guard helps prevent chains.

Disabling a portal hides it and stops actions while retaining its definition. Removing it does not remove surrounding blocks. Test build access, borders and ordinary player permissions before opening it publicly.
