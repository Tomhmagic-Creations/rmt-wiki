---
description: "Find protected land, check a claim rule and store your addon’s claim metadata."
---

# 🔌 Claims API

Find protected land, check a claim rule and store your addon’s claim metadata.

**Endpoint:** `thm_rmt:api.claims`

A claim rule check is one protection layer. It does not replace global permissions, locks, borders or your own live-target validation.

## Choose an action

Each action has its own inputs, example and result explanation.

| Task | Action | Purpose |
| --- | --- | --- |
| [Check whether land is claimed](/api/claims/is-in-claim) | `isInClaim` | Test a dimension and block position. |
| [Find a claim](/api/claims/get-claim-at-location) | `getClaimAtLocation` | Read the owner and identity of protected land at a position. |
| [Read effective claim options](/api/claims/get-claim-options) | `getClaimOptions` | Read the environmental option values that apply at a location. |
| [Check a claim action](/api/claims/has-claim-rule) | `hasClaimRule` | Ask whether an online player may perform one claim-controlled action. |
| [Explain a claim decision](/api/claims/get-claim-rule) | `getClaimRule` | Read the claim-rule resolution rather than only its allow/deny boolean. |
| [Save claim metadata](/api/claims/set-metadata) | `setMetadata` | Attach your addon’s value to an existing claim. |
| [Read claim metadata](/api/claims/get-metadata) | `getMetadata` | Read a key belonging to your namespace on a claim. |
| [Remove claim metadata](/api/claims/remove-metadata) | `removeMetadata` | Delete one of your addon’s keys from a claim. |

## Example: interact with a claimed chest

Use **Check a claim action** with interact_block and the actual loaded block as target. Handle an error as a failed check, then revalidate the live target before your action.

For a quest tied to land, use **Find a claim**, then **Save claim metadata** with its returned claimId.

## Data lifetime

Claim metadata is persistent. Read queries do not create an external runtime resource.
