---
description: "Attach your addon’s value to an existing claim."
---

# 🔌 Save claim metadata

Attach your addon’s value to an existing claim.

**Endpoint:** `thm_rmt:api.claims`

**Action:** `setMetadata`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `claimId` | String | Permanent claim ID, not its display name. |
| `key` | String | Local metadata key, without your namespace prefix. |
| `value` | Number | Value to store, publish or add; must match the action’s accepted type. |

## Example

```js
const reply = await request("claims", {
  "action": "setMetadata",
  "claimId": "CLAIM_ID",
  "key": "quest_stage",
  "value": 3
});
console.warn(JSON.stringify(reply.result));
```

## Result

The claim manager’s metadata-write result.

## Usage notes

Use a local key, not my_addon:quest_stage. Keys allow letters, digits, underscores, dots and hyphens, up to 128 characters. Values: strings up to 2,048 characters, finite numbers, booleans, null, Vector2 or Vector3. Limit: 64 keys per namespace per claim. Owner purge can block writes.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Claims actions →](/api/claims)
