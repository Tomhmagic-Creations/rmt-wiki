---
description: "Exact nodes and descriptions for realm administrators configuring this area."
---

# 📋 Claim permissions

Exact nodes and descriptions for realm administrators configuring this area.

## thm_rmt:claim_allowance.earn_amount

**Claim Allowance Earn Amount**

Whole allowance earned per active reward interval, still limited by the lifetime earnings cap. Missing, denied, invalid or zero values disable earnings; a wildcard earns 1 per interval.

Data Type | Scope
--- | ---
number | global

## thm_rmt:claim.dimension

**Claim Dimension**

Allows the player to claim in a specific dimension. Example claim.dimension=(minecraft:overworld)

Data Type | Scope
--- | ---
string | global

## thm_rmt:claim.create

**Create Claims**

Allows the player to create claims.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:claim.remove

**Use Claim Removal Tool**

Remove claim chunks using the Claim Removal item. Claim-management access is still required; this does not grant access to other players' claims.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:claim_allowance.max

**Lifetime Claim Allowance Limit**

Limits lifetime automatically earned claim allowance. Starting and bonus allowance do not count. Example claim_allowance.max=(500); wildcard allows unlimited earnings.

Data Type | Scope
--- | ---
number | global

## thm_rmt:admin.manage_players.claim_allowance

**Edit Player Claim Allowance**

Allows staff to grant bonus claim allowance or explicitly edit earned allowance. Lifetime automatic earnings cannot be reset.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.manage_players.claims

**Manage Player Claims**

Allows the player to manage another player's claims from the admin menu.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.claim_flag

**Give Admin Claim Flag**

Allows the player to give themselves the admin claim flag item.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.claim_rules

**Manage Claim Rules**

Create, edit and remove realm-wide claim rules and options.

Data Type | Scope
--- | ---
allow/deny | global

## thm_rmt:admin.claims

**Manage Admin Claims**

Allows the player to manage the admin claim.

Data Type | Scope
--- | ---
allow/deny | global
