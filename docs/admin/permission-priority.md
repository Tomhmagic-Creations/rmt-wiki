---
description: "Work out why an allow or deny wins without granting everything to fix one feature."
---

# 🔐 Priority and troubleshooting

Work out why an allow or deny wins without granting everything to fix one feature.


## 📋 Resolution order

1. Consider matching, unexpired assignments whose contexts pass.
2. Personal assignments take precedence over group assignments.
3. For group assignments, the highest matching numeric priority wins.
4. At the winning priority, a matching deny wins over an allow.

Players inherit Default, their directly assigned groups and the parents of those groups. A parent relationship does not mean that a low-priority allow always defeats a higher-priority deny.

## 💡 A VIP exception

Default can deny `thm_rmt:warp=(vip_lounge)`, while a higher-priority VIP group allows that exact value. Test a player with VIP and one without it. A personal deny on the VIP player can still override the group result.

## ❓ A limit is not the biggest number found

Do not put several competing numeric limits at the same priority and assume the largest wins. Equal-priority distinct data values resolve deterministically, not necessarily to the highest allowance. Use intentional priorities and inspect the matched policy.

## ⌨️ Inspect a player

```text
/thm_rmt:permplayerinfo "Player Name"
/thm_rmt:permcheck "Player Name" thm_rmt:feature.home
/thm_rmt:permgroupinfo vip
```

Offline checks cannot evaluate runtime contexts. Use an online variant with a selector when a live player context is needed, as documented on Permission Commands.

## ✅ Troubleshooting order

Check the feature node, its command node, numeric capacity, per-destination access and selector/other-player rights separately. Then inspect personal overrides, inherited groups, priority, expiry and contexts. Finally test claims, locks and borders: they are separate layers, not global permissions that one allow necessarily bypasses.

Native operators normally bypass RMT permission resolution. Use a non-operator to verify an ordinary role. A broad wildcard may hide the missing node while granting unrelated staff powers and unrestricted limits.
