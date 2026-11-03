---
description: "Configure escalation rules deliberately, separately from reviewing individual reports."
---

# ⚙️ Punishment automation

Configure escalation rules deliberately, separately from reviewing individual reports.


## 📌 Create an escalation rule

Open **Moderation > Punishment Automation**. Add a rule, choose its trigger, threshold and counting period, then select an action, reason and duration where needed. New rules start disabled; enable only after reviewing the complete rule.

Supported triggers include report submission/validation and issued warnings, kicks or temporary bans. Actions include warnings, kicks and temporary or permanent bans, subject to the feature's access checks.

Report thresholds count distinct reporters. Prefer **validated reports** for automatic punishment: raw submissions are unverified and can be coordinated maliciously. Saving a rule does not immediately punish everyone who already exceeds its threshold; rules respond to threshold crossings.


## 📌 Create one rule safely

1. Open **Moderation > Punishment Automation** with the required management access.
2. Add a rule, leaving it disabled while editing.
3. Choose one trigger and a threshold. For reports, prefer validated reports to unverified submissions.
4. Choose a counting period in seconds or lifetime counting.
5. Select the action, reason and temporary-ban duration where applicable.
6. Review all fields, then enable and save.
7. Test threshold crossings in a copy of the realm before using automatic punishments publicly.

The initial maximum is 32 rules. Report thresholds count distinct reporters. Several reports from one person are not several independent witnesses.

## 📋 Understand the trigger

A newly saved rule does not immediately punish every existing qualifying player. Rules respond to threshold crossings. Automated punishments do not feed escalation again by default, helping avoid recursive chains.

Editing, disabling or deleting a rule can cancel pending work tied to it. Do not recreate rules merely to retry a punishment whose effects you have not inspected.
