---
description: "Protect your land in chunks, then decide who may use it."
---

# 🛡️ Create and manage a claim

Protect your land in chunks, then decide who may use it.


## 📌 Before you claim

Find unclaimed land and check your Available allowance in Profile. Turn on Chunk Viewer in Personal Settings if you want to see exactly which 16 × 16 area you are selecting. A flag's normal use acts on the chunk containing the clicked block, not an arbitrary visual radius around you.

## 📌 Claim one chunk

1. Get a **Claim Flag** and stand at the land you want to protect.
2. Use the flag on a block to claim that chunk.
3. Open **Claims** to select the claim, give it a recognisable name and manage its rules.

One chunk is 16 × 16 blocks. One newly claimed chunk uses one available [Claim Allowance](/claims/allowance). Use [Chunk Viewer](/building/chunk-viewer) to see your current chunk first.

## 📌 Claim a rectangle

1. Sneak-use the flag in the first corner chunk.
2. Sneak-use it again in the opposite corner chunk.
3. The inclusive rectangle between those chunks is checked before claiming.

One selection can cover up to 256 chunks. This is a selection limit, not a limit on your total land. Existing chunks you own are skipped, and only new land costs allowance. Another owner's land, insufficient allowance or dimension restrictions can prevent the selection.

Normal use clears a pending corner and acts on one chunk. Changing flag type or dimension starts a new selection. An unfinished selection expires after five minutes.

## 📌 Manage your land

Use the claim page to rename it, manage people, adjust rules and options, and manage subclaims or displays. The owner, claim admins and managers have different management rights. Trusting someone lets them use the allowed actions; it does not make them an owner or manager.

Protection height is configured per dimension by the realm. A claim does not automatically protect every possible Y level. The special spawn-build dimension cannot be claimed.

Continue with [Rules and trusted players](/claims/rules-trust), [Subclaims](/claims/subclaims) and [Removing or transferring land](/claims/manage-land).

## ⌨️ Claim from chat

Use `/thm_rmt:claim base` while standing in the desired chunk. The name is used when creating a new claim; adding land later reuses your primary claim. Use `/thm_rmt:claimlist` to find the claim ID needed by other claim commands.

## ❓ If a selection is rejected

Check available allowance, another owner’s land, the dimension and the size of the selection. A rectangle can contain no more than 256 chunks in one selection. Normal use clears an unfinished corner; switching dimensions or waiting five minutes also ends that selection. The full additional cost is checked before adding land, rather than buying only the part you can afford.
