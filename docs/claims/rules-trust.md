---
description: "Control access to your claim without giving away ownership."
---

# 🛡️ Rules, trust and options

Control access to your claim without giving away ownership.


1. Open **Claims** and select your claim or subclaim.
2. Add people to its trusted list when they need shared access.
3. Open its action rules and choose an audience for each editable rule.
4. Review environmental options separately.

## 🔐 Audiences

| Audience | Who it includes |
| --- | --- |
| None | No ordinary visitors |
| Trusted | Players on this area's trusted list |
| All | Everyone matched by the rule |
| Team | Current teammates of the main claim owner |

A rule can control actions such as placing, breaking, opening containers, using items, interacting with entities, entering land, setting homes or setting warps. The realm defines which rules exist and which you may change.

**Example:** allow opening containers for Trusted, but keep breaking blocks at None for visitors. Trusting a player only helps where a rule includes the Trusted audience.

## 📌 Environmental options

Options govern the area's environment, such as supported spawning, damage or explosion behaviour. They are separate from the people allowed to act. An administrator may force an option or rule, so some controls cannot be changed by the owner.

## ❓ Why someone still cannot act

Global permissions, locks and other matching claim rules can still deny access. An allow on one rule does not cancel every other deny. Forced rules can also apply to owners and claim staff when configured that way.

Team access follows the **main owner's** current team, including inside a subclaim. It is not access for an arbitrary permission group.

## 💡 Example: share a workshop

1. Open the workshop claim or subclaim and add your friend to its trusted list.
2. Set the relevant container-interaction rule to Trusted.
3. Give building/breaking access only where your friend should be able to change the structure.
4. Have your friend test with their own account.
5. Ask an untrusted visitor to try the same actions to confirm the intended boundary.

A separate chest lock still needs its own trusted access. Adding a friend to the claim does not edit a lock automatically.

## 🌍 Environmental options

| Option | What it controls |
| --- | --- |
| Monster Spawning | Whether supported monsters may spawn in the protected area |
| Explosions | The claim’s explosion policy |
| Entity Damage To Players | Whether entity damage to players is permitted by the claim |
| Player Damage To Players | Whether PvP is permitted by the claim |

Realm PvP and other protections still apply. Allowing PvP in a claim does not force combat on when the realm forbids it. An option you cannot edit follows realm policy.
