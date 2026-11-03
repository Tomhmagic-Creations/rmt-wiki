---
description: "Set the protected vertical range separately for each claimable dimension."
---

# ⚙️ Claim Protection Heights

Set the protected vertical range separately for each claimable dimension.


**Find it:** Admin > Settings > Claiming > Claim Protection Heights.

## 📌 Set a dimension’s range

1. Open Claiming and choose **Claim Protection Heights**.
2. Search or browse the dimension list and select the intended dimension.
3. Set **Minimum Protected Y** and **Maximum Protected Y**.
4. Choose **Save**, then test at a height inside and outside the range.

Values are inclusive whole-number block heights. Minimum must not exceed maximum, and sliders use the selected dimension’s height bounds. An unconfigured dimension uses its full height.

## 💡 Protection height is not ownership

The range affects location-based claim protection, options and inside-claim checks. It does not refund land, change chunk ownership or change allowance accounting. A claim still occupies its chunks even if a location above or below the configured range is not protected by that layer.

The spawn-build dimension is not claimable. The internal management dimension is not available in player-facing dimension choices.
