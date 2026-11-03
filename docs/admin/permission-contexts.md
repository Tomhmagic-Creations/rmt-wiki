---
description: "Limit when a grant applies or let a membership expire after a set duration."
---

# 🔐 Contexts and temporary access

Limit when a grant applies or let a membership expire after a set duration.


## 📌 Add a context

1. Open the group or personal assignment you want to restrict.
2. Add a context, select its condition and enter the expected value.
3. Add more contexts only if all should be required together.
4. Save the assignment and its containing draft.
5. Test both a matching and a nonmatching situation as a non-operator.

Contexts on one assignment use **AND**. Separate assignments can represent alternatives. Actor dimension, action location, item/block/entity targets, tags, scores and supported placeholders are different inputs; choose the one the action really supplies.

## 💡 Deny building outside claims in the Overworld

```text
/thm_rmt:perm Alex give thm_rmt:build deny "is_in_claim=false,dimension=overworld"
```

This contextual personal deny matches when both conditions hold. It does not grant building inside a claim: global access and the claim's own rules must still allow the action.

Vanilla dimension/type IDs can use shorthand such as overworld or stone. Group IDs, tags and scoreboard objective names are not automatically Minecraft IDs.

## ⏳ Give a temporary group

```text
/thm_rmt:permgrouptempgive "Player Name" vip 3600
```

This grants an existing group for one hour. Time spent offline counts. Repeating a temporary grant refreshes expiry from now, not by stacking another hour. A temporary grant does not shorten permanent membership. Assigning the group permanently promotes a temporary membership.

Temporary personal nodes use `permtempgive` with a positive duration in seconds. Default membership is implicit and cannot be removed or made temporary.

## ❓ When a contextual grant does not apply

The feature must supply the relevant target. A missing block, item or player cannot satisfy a target context, including an inverted one. Offline-ID checks cannot evaluate runtime contexts. Use unconditional authorisation for unattended automation where the feature requires it.
