---
description: "Find a team by its stable ID."
---

# 🔌 Read a team

Find a team by its stable ID.

**Endpoint:** `thm_rmt:api.teams`

**Action:** `get`

Register your namespace first. This example uses the shared [request helper](/api/request-helper) after connection.

## Inputs

| Field | Type | Meaning |
| --- | --- | --- |
| `teamId` | String | Permanent team ID. |

## Example

```js
const reply = await request("teams", {
  "action": "get",
  "teamId": "team_1"
});
console.warn(JSON.stringify(reply.result));
```

## Result

The team summary or null if not found.

## Usage notes

Use the saved team ID, not a potentially renamed display name.

A rejected request makes the helper throw. Catch errors in your action handler; a transport error or timeout must not be treated as an allow or a reason to replay a reward.

[Other Teams actions →](/api/teams)
