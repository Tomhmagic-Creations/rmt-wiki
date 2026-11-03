---
description: "Read saved statistics and Claim Allowance for a registered player."
---

# 🔌 Player data API

Read saved statistics and Claim Allowance for a registered player.

**Endpoint:** `thm_rmt:api.player_data`

Both actions support registered offline player IDs. Unloaded legacy player properties may still require that player’s first V2 join before conversion. Pending purge rejects these reads.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Read player statistics](/api/player_data/get-stats) | `getStats` | Read the configured stat map and compatibility player statistics. |
| [Read Claim Allowance](/api/player_data/get-claim-allowance) | `getClaimAllowance` | Read entitlement, used land and the remaining available balance. |

## Example: display land capacity

Read Claim Allowance and display result.available. Use earned and bonus only when explaining the balance; neither is the available amount on its own.

For gameplay progress, read getStats and use a configured stat ID from result.stats.

## Data lifetime

These are read-only views of RMT’s player data.
