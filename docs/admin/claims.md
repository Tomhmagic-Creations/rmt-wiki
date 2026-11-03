---
description: "Create realm-owned protected land and handle land changes that need administrative access."
---

# ⚙️ Manage realm and player claims

Create realm-owned protected land and handle land changes that need administrative access.


## 📌 Administrative claims

The **Admin Claim Flag** creates realm-owned land and uses the same single-chunk and two-corner controls. These claims do not spend a normal player's allowance. They are useful for spawn or shared infrastructure.

For exact land-editing and people-management command parameters, use the [command reference](/reference/commands).


## 📌 Create protected spawn land

1. Use an **Admin Claim Flag** on a block for one chunk, or sneak-use two opposite corner chunks.
2. Open the claim management page and name the protected area.
3. Configure visitor rules and environment options appropriate to the location.
4. Test a player entering, placing, breaking and opening a container.

Realm-owned land does not consume a normal player's allowance. Owning an Admin flag does not itself grant its permission.

## 🔐 Manage another player's land

Staff need `thm_rmt:admin.manage_players.claims` for other players' claims. Realm-owned claims need `thm_rmt:admin.claims`. Appointed claim managers can make ordinary edits, but cannot change the claim team, transfer ownership or delete the main claim.

## 🔄 Transfer or merge

Transfer preserves a claim's ID, rules and subclaims. The recipient must have enough available allowance; usage moves to them without rewriting either player's Earned or Bonus balances.

A merge requires administrative access to both claims and the same owner. Transfer first if owners differ. **Only source land moves:** source rules, trusted lists, staff, subclaims, display settings and metadata are discarded. The destination keeps its settings and ID. Review the destructive confirmation carefully.

## 🗑️ Remove a whole claim

Deleting a claim removes protection and its settings/subclaims; it does not delete buildings. Used allowance is released rather than paid back as Bonus. The removal tool asks for confirmation when the selection covers the whole remaining claim and requires the corresponding administrative management access.
