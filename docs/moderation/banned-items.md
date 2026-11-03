---
description: "Maintain a list of item types removed by RMT checks."
---

# ⚙️ Banned items

Maintain a list of item types removed by RMT checks.


Open the **Banned Items** management list available to your staff role. Add a type ID such as `minecraft:tnt`, search existing entries or remove a ban. Vanilla shorthand such as `tnt` gains `minecraft:`; keep custom namespaces.

## ✅ When checks happen

- A joining player's inventory is checked.
- Relevant inventory changes trigger player inventory/equipment checks.
- Successful block or entity interactions check the relevant container.
- Newly spawned dropped items are checked.
- Adding a ban checks online players.

Players with `thm_rmt:banned_items.bypass` are exempt from applicable player-triggered scans. Dropped-item removal is global because the spawn event does not reliably identify who dropped it.

There is no periodic scan-frequency setting. Unloaded containers, already-existing dropped items and items nested inside other items are not universally swept. The list is not a replacement for claim protection or a guarantee that every possible use of an item is cancelled.
