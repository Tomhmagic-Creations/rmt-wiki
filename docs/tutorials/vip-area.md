---
description: "Combine a realm warp and permission groups to restrict a shared destination."
---

# 📚 Create a VIP destination

Combine a realm warp and permission groups to restrict a shared destination.


**Uses:** [Realm warps](/admin/spawn), [Groups](/admin/permissions). This controls warp access; protecting the destination's land is a separate step.

## 📌 1. Create the destination

Stand in the VIP lounge and use **Admin > Manage Warps** to save a realm warp named `vip_lounge`. Use the exact saved name in its permission data node.

## 🔐 2. Apply the access policy

Create a VIP group if one does not already exist, with a priority above Default. Then:

```text
/thm_rmt:permgroupnode default add "thm_rmt:warp=(vip_lounge)" deny
/thm_rmt:permgroupnode vip add "thm_rmt:warp=(vip_lounge)" allow
/thm_rmt:permgroup "Player Name" give vip
```

The player also needs the Warps feature and any command permission used to reach it. The higher-priority VIP allow is intentional; do not expect an arbitrary allow to defeat a winning deny.

## ✅ 3. Test two accounts

Test with an ordinary non-operator outside VIP: the warp should be unavailable or denied. Assign VIP and test again. Check personal overrides if the result is unexpected.

## 📌 4. Protect the room separately

A private warp does not stop someone walking to the room. Use an administrative claim and suitable entry/action rules for the physical space. Claim Team/Trusted audiences are not arbitrary permission-group audiences, so design that policy separately.

**Adapt it:** add the warp action to a custom form using a Stored Command, while keeping the same destination permission checks.
