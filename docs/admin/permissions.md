---
description: "Give each player the abilities and limits they need."
---

# ⚙️ Permissions and groups

Give each player the abilities and limits they need.


Open **Admin > Permissions**. Use **View Permissions** to search descriptions before assigning a node.

## 📌 Create a group

1. Choose **Add Group** and set its permanent ID, display name and priority.
2. Add the permission nodes it needs, choosing Allow or Deny.
3. Add parent groups when it should inherit another group's policy.
4. Save the containing group after editing its nodes and contexts.
5. Open **Player Permissions**, select a registered player and assign the group.

Every player implicitly has Default. Players can have multiple additional groups. Membership buttons apply immediately; node/context edits belong to the containing draft until saved.

## 💡 Example: VIP with ten homes

```text
/thm_rmt:permgroupcreate vip VIP 10
/thm_rmt:permgroupnode vip add "thm_rmt:prefix=([VIP])" allow
/thm_rmt:permgroupnode vip add "thm_rmt:homes.max=(10)" allow
/thm_rmt:permgroup "Player Name" give vip
```

This changes the limit; the player still needs Home feature and command access. Keep ordinary player abilities in Default.

## 📌 Understand the result

- Personal assignments take precedence over group assignments.
- Higher numeric group priority wins where priorities decide a match.
- At the winning matching priority, a deny wins over an allow.
- Contexts restrict when an assignment matches, such as a dimension or target.
- Temporary nodes and memberships expire in real seconds, including time offline.

Do not grant a broad wildcard as an ordinary-player shortcut: it can grant staff powers and remove limits. An operator test can hide a missing permission, so test with a non-operator.

Use the [permission reference](/reference/permissions) for exact nodes and [permission commands](/reference/permission-commands) for temporary grants, personal nodes and contexts. See [Group automation](/technical/group-automation) for automatic awards.
