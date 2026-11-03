---
description: "Use staff-only sorting commands and test their access policy."
---

# ⚙️ Sorting administration

Use staff-only sorting commands and test their access policy.


## 📌 Staff automation

Separate management commands support a specific block location or entity selector:

```text
/thm_rmt:sortblock 10 64 20 overworld
/thm_rmt:sortentity @a
```

These require their own command and matching feature access. A player target needs player-sort access; a non-player target needs entity-sort access. Unloaded or unsuitable containers are rejected.


## ✅ Test ordinary access

Try a supported container as its owner, a trusted player and an untrusted player. Then repeat inside a claim: a lock grant does not override the claim's rules. For sorting, check block, entity and player-sort access separately. Player inventory sorting leaves hotbar and equipment in place.
