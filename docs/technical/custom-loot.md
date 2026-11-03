---
description: "Build a weighted loot table and deliver its generated items."
---

# 🛠️ Custom Loot

Build a weighted loot table and deliver its generated items.


1. Open **Technical > Custom Loot** and create a table with a permanent ID.
2. Add a pool and choose its fixed roll count or inclusive roll range.
3. Add entries: Item, Nothing or another existing custom table.
4. Set a positive relative weight and quantity range for each item.
5. Add optional name, lore, durability or enchantment functions.
6. Save nested editors, then **Save the table**. Use **Test Generation** before delivery.

## 📌 Understand rolls and weights

Each roll picks one entry, and the same entry may be picked again. Weights are relative: entries weighted 3 and 1 have a 3:1 chance per roll. Quantity is a separate inclusive range. Empty pools, zero rolls or zero quantities intentionally give nothing.

Functions run in order. Enchantment functions replace previous enchantments. Durability is **remaining percentage**: 100 means undamaged. Preview checks generation without giving items.

## 📌 Deliver a table

```text
/thm_rmt:customlootgive starter_loot @s
/thm_rmt:customlootspawn starter_loot 10 65 20 overworld
/thm_rmt:customlootblock starter_loot 10 64 20 false overworld
```

Give generates independently per target. Container insertion merges/inserts items and drops overflow at the destination. The optional random-slots setting spreads new items across empty slots without rearranging old items. Ender Chests cannot be targeted as block containers.

Replacement commands overwrite selected slot ranges and may clear leftover slots. Read the [command reference](/reference/commands) before using them.

Loot tables do not decide conditions, history or cooldowns. Attach one to a [crate](/admin/crates), or invoke a delivery command from [Events](/technical/events). There is no automatic retry after a partial delivery.
