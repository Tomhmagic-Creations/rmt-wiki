---
description: "Understand your land balance and how it grows."
---

# 🛡️ Claim Allowance

Understand your land balance and how it grows.


View your balances in **Profile** or the claim allowance workflow.

| Balance | Meaning |
| --- | --- |
| Earned | Your earned allowance entitlement |
| Bonus | Adjustments such as grants or gifts |
| Used | Land currently occupied by your claims |
| Available | Allowance remaining after used land is accounted for |
| Lifetime Auto Earnings | Total automatic earnings counted against the lifetime cap |

Claiming a new chunk uses one available allowance. Removing eligible land releases used allowance. A large selection is checked for its full cost before land is changed.

## 📌 Automatic earnings

The realm sets the earning interval. Permissions set how much you earn and your lifetime automatic-earning cap. AFK time pauses eligible earning progress; it does not reset that progress every time you become AFK. Reconnecting or restarting the reward timer can reset a partial interval.

The lifetime cap is not your current available balance. Reducing it does not remove your existing land. Starting allowance is a separate initial grant.

## 💡 Read a balance

If Earned is 20, Bonus is 5 and Used is 12, you have 13 Available chunks. Creating a three-chunk subclaim entirely inside those 12 used chunks leaves that total unchanged. Claiming three new chunks changes Used to 15 and Available to 10.

## 🎁 Share allowance

Use `/thm_rmt:claimallowancegive "Friend Name" 5` to give five available allowance to a registered player. This spends your Bonus first and then Earned; the recipient receives Bonus. You cannot give to yourself or share allowance already used by land.

`/thm_rmt:claimallowance` displays your balances without making a grant. Sharing does not reduce Lifetime Auto Earnings or create fresh capacity under its lifetime cap.
