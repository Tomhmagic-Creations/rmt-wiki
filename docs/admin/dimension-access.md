---
description: "Choose which groups may enter a dimension, independently of its border."
---

# ⚙️ Dimension access

Choose which groups may enter a dimension, independently of its border.

## 📌 Restrict dimension entry

Dimension entry is normally allowed unless a matching deny applies. Use a data permission such as `thm_rmt:dimension_enter=(minecraft:nether)` to control entry, and review portal-activation policy separately. A higher-priority group can allow a dimension denied in Default.

There is no exit permission. The internal management dimension is not a player destination. Claims, RTP and other features can impose their own per-dimension restrictions in addition to entry access.

Players can change their own border appearance in **Profile > Personal Settings** without changing enforcement.
