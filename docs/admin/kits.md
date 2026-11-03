---
description: "Capture an inventory template and choose how players receive it."
---

# ⚙️ Create and manage kits

Capture an inventory template and choose how players receive it.


1. Prepare the inventory, hotbar, armour and offhand you want the kit to contain.
2. Open **Admin > Manage Kits**, or create it with `/thm_rmt:kiteditor create starter`.
3. Choose its display settings, Claim or Give-only mode, group rules, cooldown and redemption limit.
4. Choose an inventory-conflict policy and save.
5. Test normal claiming as an eligible non-operator with both empty and partly full slots.

Create and Save copy your items; they do not consume them. Ender Chests are excluded. Loading a kit template into the editor requires your relevant live slots to be empty.

## 📌 Inventory-conflict policies

| Policy | When a preferred slot is occupied |
| --- | --- |
| Choose Next Slot or Drop | Use another slot, then drop remaining items |
| Drop | Drop conflicting items |
| Choose Next Slot or Fail | Refuse delivery if everything cannot fit |
| Fail | Refuse delivery if a preferred slot is occupied |

Normal claims require all eligibility checks. A redemption limit of -1 is unlimited; zero prevents normal claims. Cooldowns use whole seconds and continue offline.

## 📌 Give directly

```text
/thm_rmt:givekit starter @a[name="Player Name"]
```

Staff Give bypasses normal recipient permissions, group restrictions, claim-only rules, cooldown and redemption limits, but still follows inventory handling. Use explicit targets from command blocks.

IDs are permanent and retired after deletion. Review interrupted-delivery status in kit management rather than blindly issuing another copy.
