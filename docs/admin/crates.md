---
description: "Attach loot and command rewards to a block with an optional opening cost."
---

# ⚙️ Create and manage crates

Attach loot and command rewards to a block with an optional opening cost.


1. Create the reward [loot table](/technical/custom-loot) and/or [Stored Command](/technical/stored-commands) first.
2. Open **Admin > Crates** and create a definition.
3. Set its name, payment mode, reward references and optional effects.
4. Choose a cooldown and lifetime per-player claim limit if wanted.
5. Save the definition, then assign its block or blocks.
6. Test one opening with the intended player's permissions and inventory.

## 📌 Payment modes

| Mode | Payment |
| --- | --- |
| Key | A crate-specific authenticated key issued through the feature |
| Item | Ordinary items of the configured type |
| Score | A positive whole-number amount from an existing scoreboard objective |
| Nothing | Free opening, still subject to cooldown and limits |

Key appearance alone is not authentication. Changing the key item type invalidates old keys; changing name/lore alone does not. Authenticated keys cannot accidentally pay an ordinary Item cost.

## 📌 Reward order and limits

Custom loot is generated separately for each opening and delivered before Stored Commands. Commands run **as the opening player**, without operator elevation.

Cooldown and lifetime limits are shared across every block assigned to that crate ID. Limit -1 is unlimited; zero prevents openings. Counts continue to be tracked while unlimited. Payment and the opening count are committed before reward execution, so a reward configuration error is not an automatic refund or retry.

Remove block assignments before deleting a crate. Deleting retires its ID. Use the crate editor's history/recovery controls where available and inspect errors before issuing replacement rewards.
