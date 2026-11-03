---
description: "Combine a weighted loot table and a free crate with a per-player cooldown."
---

# 📚 Create a random supply crate

Combine a weighted loot table and a free crate with a per-player cooldown.


**Uses:** [Custom Loot](/technical/custom-loot) and [Crates](/admin/crates). Use a copied test area before offering real rewards.

## 📌 1. Make the table

Create `supply_loot` in Technical > Custom Loot. Add a pool with one roll and two Item entries:

| Item | Quantity | Weight |
| --- | --- | --- |
| minecraft:bread | 4 | 3 |
| minecraft:iron_ingot | 2 | 1 |

Each opening has a 3:1 relative selection between bread and iron. Save the entry and pool editors, then save the whole table. Test Generation several times; random results need not alternate.

## 📌 2. Make the crate

In Admin > Crates, create `supplies`, select the custom loot table and choose **Nothing** for payment. Set a cooldown of 3600 seconds if each player should wait an hour between openings. Keep the lifetime limit at -1 for repeatable access, or choose a deliberate finite limit.

Do not add a Stored Command reward unless you actually need one. The loot table alone can provide this reward.

## ✅ 3. Assign and test

Save the crate, assign a block and test with a permitted player. Confirm the reward, then try again immediately to check the cooldown. Two blocks assigned to this same crate ID share that player's cooldown and opening count.

## ❓ 4. Check failure handling

Test a full inventory and review the documented delivery behaviour. Payment/opening state can be consumed before a configured reward fails. Diagnose the problem before issuing replacements; crate opening is not an automatic transaction rollback.

**Adapt it:** change Nothing to Score for an in-world points cost. Create and fund the scoreboard objective separately, then test insufficient balance as well as successful payment.
