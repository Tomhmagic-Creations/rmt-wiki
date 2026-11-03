---
description: "Choose recorded action types, retention and storage limits."
---

# ⚙️ Action Log Settings

Choose recorded action types, retention and storage limits.


**Find it:** Admin > Settings > Action Log Settings. This specialised manager also needs its own permissions.

## 📋 Main controls

| Control | Purpose | Initial value |
| --- | --- | --- |
| Enabled | Whether new gameplay records are captured | Off |
| Global Retention Days | Default age limit for retained records | 7 days |
| Maximum Entries | Overall record-count cap | 10,000 |
| Maximum Storage in MB | Overall payload cap | Approximately 8 MB |

## 📌 Enable recording

1. Choose Enabled and review the main retention/cap controls.
2. Open **Action Types** and choose the events you need.
3. Save each type’s draft, then return to the main screen and choose **Save** to persist the complete configuration.
4. Perform a known action and ask an authorised moderator to find it in Action Log.

## 🗂️ Per-action settings

Each type has **Enabled** and a **Retention Days** override. Available types include block changes, drops/pickups, container opens/closes, signs, kills, item use, entity interaction, inventory changes and joins/leaves.

Recording begins when enabled; it cannot reconstruct earlier actions. Type overrides let you retain some evidence differently from the global default.

## 📊 Storage and Diagnostics

This screen shows recording status, saved entries, storage used, skipped records and unavailable sign checks. Use Refresh for a current snapshot. Investigation instructions are in Moderation > Action Log.

Action retention is separate from inactive-player purge. Removing personal player data must not be assumed to erase independently retained evidence.
