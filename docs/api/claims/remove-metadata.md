---
description: "Delete one of your addon’s keys from a claim."
---

# 🔌 Remove claim metadata

Delete one of your addon’s keys from a claim.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `removeMetadata`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `claimId` | String | Permanent claim ID, not its display name. |
| `key` | String | Local metadata key, without your namespace prefix. |

## Example

```js
const reply = await request("claims", {
  "action": "removeMetadata",
  "claimId": "CLAIM_ID",
  "key": "quest_stage"
});
console.warn(JSON.stringify(reply.result));
```

## Result

The metadata-removal result.

## Usage notes

This does not remove the claim, its rules or another addon’s keys.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)
