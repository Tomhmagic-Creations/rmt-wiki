---
description: "Find broken configuration references and fix the saved setup that caused them."
---

# 🛠️ Error Log

Find broken configuration references and fix the saved setup that caused them.


Open the **Error Log** available to your technical staff role and inspect the latest report. Read its source, message and suggested correction before changing data.

## ❓ A useful troubleshooting order

1. Confirm the referenced Stored Command, form, stat, loot table or other ID still exists.
2. Check exact spelling and use the permanent ID rather than a renamed display label.
3. Check the executor, target and placeholder context.
4. Check the caller's command and feature permissions.
5. Save the corrected configuration and test once with the intended player.

Event Diagnostics is the better place for ordinary event-condition nonmatches, cooldowns and skipped executors. Those are not necessarily errors. The gameplay [Action Log](/moderation/action-log) records observed activity rather than configuration mistakes.

Missing external addon resources can remain unresolved until the addon registers them again. Do not replace an unknown value with a guessed zero just to make a reward condition run.

Unexpected script/API exceptions belong in developer diagnostics and may not appear here. Streamer Mode can block sensitive error details under the realm policy.
