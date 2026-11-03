---
description: "Read a key belonging to your namespace on a claim."
---

# 🔌 Read claim metadata

Read a key belonging to your namespace on a claim.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `getMetadata`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `claimId` | String | Permanent claim ID, not its display name. |
| `key` | String | Local metadata key, without your namespace prefix. |

## Example

```js
const reply = await request("claims", {
  "action": "getMetadata",
  "claimId": "CLAIM_ID",
  "key": "quest_stage"
});
console.warn(JSON.stringify(reply.result));
```

## Result

The stored value, or null when missing.

Illustrative successful reply (values depend on your world):

```json
{
  "action": "getMetadata",
  "requestId": "my_addon-1",
  "success": true,
  "result": 3
}
```

## Usage notes

A saved null and an absent key both read as null. A missing claim produces an error.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)
