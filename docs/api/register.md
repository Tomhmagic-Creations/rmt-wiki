---
description: "Claim a namespace once per script runtime before using the feature endpoints."
---

# 🔌 Register your addon

Claim a namespace once per script runtime before using the feature endpoints.


**Endpoint:** `thm_rmt:api.register`. No action field is required.

1. Install your response listener before sending the request.
2. Send your namespace and a unique requestId.
3. Wait for the matching successful reply before registering resources or querying features.

## Request

```json
{
  "namespace": "my_addon",
  "requestId": "register-1"
}
```

Send this JSON as the message for thm_rmt:api.register. The default reply channel is thm_rmt:api.register.response.

## Successful reply

```json
{
  "requestId": "register-1",
  "success": true,
  "namespace": "my_addon"
}
```

Registration has namespace rather than a normal result value. The shared helper handles request matching and timeouts.

## Using the helper

```js
await connectRMT();
// Now register your definitions or send feature requests.
```

Namespaces use 1–64 lowercase letters, digits or underscores; minecraft and thm_rmt are reserved. The first registration wins and duplicates reject. At most 128 external namespaces can be registered. This prevents accidental collisions between trusted addons, not malicious impersonation.

Registration ends at restart. Register again on a fresh runtime, then republish your resources. Do not automatically retry a registration timeout: the first request may already have succeeded.
