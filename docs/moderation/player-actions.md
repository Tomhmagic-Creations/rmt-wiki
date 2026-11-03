---
description: "Handle player issues with recorded actions and separately granted staff powers."
---

# 🛡️ Player actions

Handle player issues with recorded actions and separately granted staff powers.


Open **Moderation** and select the player or action you have been authorised to use. Available operations depend on your assigned powers.

## 📌 Warn, kick or ban

Select the player, choose the action and enter a clear reason. Use RMT's namespaced kick command when you want the reason recorded; vanilla kick is not intercepted.

```text
/thm_rmt:kick @a[name="Player Name"] "Please follow the rules"
/thm_rmt:ban @a[name="Player Name"] "Repeated griefing" 0 1 0
/thm_rmt:banoffline "Player Name" "Repeated griefing" 1 0 0
```

The ban duration fields are **days, hours, minutes**. Omitting a positive duration requests a permanent ban, requiring permanent-ban access. Over-limit temporary bans are rejected rather than shortened. Offline banning has its own permissions and requires a player already known to RMT.

## 📌 Other staff controls

- Review and manage punishments using the permitted history actions.
- Use Spy when permitted. Spectator and Creative variants have distinct access; Creative Spy is not a camera-follow spectating system.

Grant powers individually. Online ban access, offline ban access, permanent bans and maximum temporary duration are separate permissions. An RMT group name alone does not establish those powers.

See [Reports](/moderation/reports), [Invsee](/moderation/inventories), [Action Log](/moderation/action-log) and [Banned items](/moderation/banned-items).

## 📋 Review punishment history

Check the target, reason and existing case before issuing another action. Cases record a target, moderator, reason and timestamp. Unbanning ends the restriction without deleting the historical case; an expired ban also remains history rather than an active restriction.

Warnings for registered offline players are delivered on their next eligible join. Offline banning likewise requires a player already known to RMT, rather than an invented name.

## 🕵️ Use Spy

Choose the supported Spy workflow when investigating quietly. Spectator uses native spectator mode. Creative Spy additionally requires its own power and uses invisibility/geometry hiding; it is not a camera-follow feature. Turn Spy off when finished. If no unrelated later mode change occurred, RMT restores the captured previous mode.

## ❓ If a staff action is denied

Check the target and permitted duration rather than repeating the command with zeros: no positive ban duration requests a permanent ban. Protected staff targets can be deliberately excluded. Ask the administrator to review your assigned role if an expected control is missing.
