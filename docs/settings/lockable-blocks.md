---
description: "Choose which block types players may lock."
---

# ⚙️ Lockable Blocks

Choose which block types players may lock.


**Find it:** Admin > Settings > Lockable Blocks.

## ➕ Add a block type

1. Enter its **Block Type ID**, for example `minecraft:chest`.
2. Select **Add**.
3. Find the identifier in the searchable list and test with the Lock item.

Vanilla shorthand such as `chest` gains `minecraft:`. Preserve a custom addon’s namespace. The setting controls lock eligibility; it does not grant global or claim interaction permission.

## ➖ Remove a block type

Select the existing ID, choose **Remove**, and review the resulting list. Removing it prevents new locks on that type. Reading old locks on a removed type cleans their lock data; unlocking is not forbidden merely because the type was removed.

An empty list stays empty across normal loads; deleted types are not automatically restored. Door/bed parts use their relevant source block. Do not assume two adjacent chests are automatically detected as one lock.

## ✅ Test both protection layers

Try the block as its owner, a lock-trusted player and an untrusted player. Repeat inside a claim. Passing the lock check does not override a claim denial.
