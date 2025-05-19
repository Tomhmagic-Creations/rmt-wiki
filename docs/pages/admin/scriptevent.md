# 🛠️ Custom Scriptevents

The RMT Add-On includes several custom scriptevents that allow admins to interact with and modify data within the Add-On. Here are the available custom scriptevents:

---

## 📦 Editing Claim Blocks

- Command: `/scriptevent thm_rmt:editClaimBlocks [value]`
- This command adjusts the claim blocks for a targeted player.
- Use a positive value to **add** claim blocks or a negative value to **remove** them.
- MUST be executed off the player you want to target

**Example Usage:**

```
/execute as @a at @s run scriptevent thm_rmt:editClaimBlocks 10
```

---

## 📝 Resetting Holograms

- Command: `/scriptevent thm_rmt:resetPlacedHolograms [playerName]`
- Resets the hologram count for the specified player, allowing them to place more holograms.

---

## 🏆 Give Rank

- Command: `/scriptevent thm_rmt:giveRank [rankName]`
- Grants a specified rank to the targeted player.
- Will return an error if the rank does not exist.
- MUST be executed off the player you want to target

**Example Usage:**

```
/execute as @a at @s run scriptevent thm_rmt:giveRank Admin
```

---

## ❌ Remove Rank

- Command: `/scriptevent thm_rmt:removeRank [rankName]`
- Removes a specified rank from the targeted player.
- MUST be executed off the player you want to target

**Example Usage:**

```
/execute as @a at @s run scriptevent thm_rmt:removeRank Moderator
```

---

## 🎥 Tutorial

<iframe width="560" height="315" src="https://www.youtube.com/embed/f9dQegArmWI?si=t0uSBhiw-ELmuyf2&amp;start=2298" title="Custom Scriptevents Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
