---
description: "Set the earning policy and adjust player balances without confusing entitlement with available land."
---

# ⚙️ Configure Claim Allowance

Set the earning policy and adjust player balances without confusing entitlement with available land.


## 📌 Set the earning policy

1. Open **Admin > Settings > Claiming** and choose the starting allowance and earning frequency.
2. Open **Admin > Permissions** and edit Default or the intended group.
3. Set the amount earned per interval through `thm_rmt:claim_allowance.earn_amount=(number)`.
4. Set the lifetime automatic-earnings cap through `thm_rmt:claim_allowance.max=(number)`.
5. Save the group and test with a non-operator who is not AFK.

Starting allowance is a separate initial grant. Bonus grants and shared allowance do not use up the automatic lifetime cap. Missing/denied earning access or no remaining cap capacity means no automatic award. Reducing the cap does not remove existing land.

## 📋 Read balances before editing

**Available = Earned + Bonus − Used.** Used comes from the player's land across dimensions; subclaims do not count a second time. Administrative claims do not spend personal allowance.

## ⌨️ Adjust a registered player

These target a registered name or player ID, including offline players; they do not use selectors.

```text
/thm_rmt:claimallowance "Player Name"
/thm_rmt:claimallowancegrant "Player Name" 50
/thm_rmt:claimallowanceset "Player Name" 100
/thm_rmt:claimallowanceearnedset "Player Name" 100
```

Grant, bonus adjustment and earned adjustment have different purposes. Check the [command reference](/reference/commands) before changing existing balances. Allowance sharing spends the sender's balance and requires a player caller.


**Important:** `claimallowanceset` sets the **Bonus balance**, not the displayed Available balance. `claimallowanceearnedset` sets Earned. Neither resets Lifetime Auto Earnings. Staff cannot reduce balances below the entitlement required by existing land.

## 💡 Example: grant room for 50 more chunks

Use `/thm_rmt:claimallowancegrant "Player Name" 50`. This adds bonus entitlement without rewriting their earned progress. Read the balance afterwards rather than assuming that setting Bonus to 50 produces 50 Available.

Amounts must be safe whole numbers. The target must already be registered with RMT. Grants and adjustments need `thm_rmt:admin.manage_players.claim_allowance`.
