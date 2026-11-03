---
description: "Use small command tools for item editing, entities, effects and experience."
---

# 🛠️ Utility commands

Use small command tools for item editing, entities, effects and experience.


These commands expose useful operations for trusted staff and automation. Each has its own permission. Use the [command reference](/reference/commands) for the complete typed syntax.

## 📌 Edit an item in hand

```text
/thm_rmt:itemname @s "Builder's Pick"
/thm_rmt:itemlore @s "For the community build"
/thm_rmt:itemdurability @s 100
```

The default is main hand. Editing keeps the existing item's other data; it does not create another stack. Durability is remaining percentage, and the item must support durability.

## 📌 Entity actions

```text
/thm_rmt:impulse @e[type=minecraft:pig,r=5] 0 1 0
/thm_rmt:clearvelocity @e[type=minecraft:pig,r=5]
/thm_rmt:extinguish @e[type=minecraft:pig,r=5]
```

Impulse is a numeric force vector, not a location: relative `~` and local `^` coordinates do not apply. Gravity and AI can move an entity again after Clear Velocity. Entity Remove is not Kill, does not generate death loot, and rejects players and managed RMT entities.

## 📌 Explosions and private effects

The utility reference also includes explosions and particles visible to selected players. An explosion with block breaking disabled can still damage and knock back entities. Check every optional flag before invoking it.

## 📌 Spawn XP

Spawn one experience orb containing an amount of XP, rather than experience levels:

```text
/thm_rmt:spawnxp 100 ~ ~1 ~
/thm_rmt:spawnxp 500 0 70 0 overworld
```

The amount is 1–12,000 XP. The destination must be loaded. A server command without an execution dimension must supply one. This needs `thm_rmt:command.spawnxp`, with access checked at the destination. See the [command reference](/reference/commands) for exact parameters.
