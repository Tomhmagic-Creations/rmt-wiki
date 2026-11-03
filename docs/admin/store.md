---
description: "Build a catalogue with clear prices, tested rewards and purchase receipts."
---

# ⚙️ Realm Store

Build a catalogue with clear prices, tested rewards and purchase receipts.


1. Open **Admin > Realm Store** and save the Store Page name, description and enabled state.
2. Create a category and add a product.
3. Choose the payment type and one or more existing Stored Command reward sequences.
4. Apply the payment draft, then **Save** the product.
5. Test a purchase as a customer with their real permissions before opening the store.

Products can use inventory-item payment, a scoreboard score or externally issued redemption codes. For code products, use the payment editor's Main Token controls; existing private tokens are not displayed back.

## 📌 Show the storefront

The Store Page's **Show on Main Menu** option starts off. When enabled, the button appears for permitted players while the store is open. Hiding the button does not disable store commands.

```text
/thm_rmt:store
/thm_rmt:storecategory supplies
/thm_rmt:storeproduct starter_supplies
```

The direct category/product commands need their own command access. All storefront entry paths also require Store use access.

## ✅ Organise and test

Lower Display Order values appear first. Disabling a category hides its products. Save incomplete products as disabled drafts; missing reward references or required token configuration prevent enabling them.

Rewards execute as the buyer, so a player-facing shop must use commands customers can actually run. A command being scheduled is not proof its reward was delivered. Buyers have **My Purchases**; staff with history access can inspect receipts. Review the status before retrying a failed or interrupted purchase.

Empty a category before deleting it. Deleted category/product IDs cannot be reused.
