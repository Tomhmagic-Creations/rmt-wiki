---
description: "Define the protections claim owners can use across the realm."
---

# 🛡️ Realm claim rules

Define the protections claim owners can use across the realm.


Open **Admin > Claim Rules**. These definitions are shared by the realm; owners select their allowed states inside individual claims.

## 📌 Create one rule

1. Add a definition with a stable ID and readable name.
2. Choose its trigger, such as **interact_block**, **break**, **build** or **enter**.
3. If the rule should affect only particular things, add type-ID or tag filters.
4. Choose its allowed/denied behaviour and default audience.
5. Choose whether it is optional, defaulted or forced according to the offered policy controls.
6. Save, then test in a claim as an ordinary visitor and as a trusted player.

## 💡 Example: a container interaction rule

Choose **interact_block** and filter by the intended container ID, such as `minecraft:chest`. Use Trusted as the intended audience where the realm policy allows owners to choose it. Then check both the claim's rule state and any existing general interaction rule: another matching deny still matters.

Empty filters match every target. Type IDs and tags match as alternatives; blacklist mode inverts the filter. A rule's target must be available for its filter to match.

## 📌 Forced protection

Forced rules can prevent claim owners changing realm policy. The separate forced-staff restriction determines whether privileged claim roles are included. Use this deliberately and test ownership/staff behaviour rather than assuming that every forced rule treats them the same way.

Claim protection heights are configured per dimension in Claiming settings. Entry rules can reject walking or teleporting into land; they are different from breaking or building rules.
