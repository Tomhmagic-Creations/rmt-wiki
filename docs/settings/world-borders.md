---
description: "Configure a separate square boundary for each dimension."
---

# ⚙️ World Borders

Configure a separate square boundary for each dimension.

**Find it:** Admin > Settings > World Borders. This is the same saved border configuration available through Admin > World Borders.

## 📌 Set a border

1. Open **Admin > World Borders** or **Settings > World Borders**.
2. Select the dimension.
3. Set its centre and size, then save.
4. Inspect the result and test without operator bypass.

Size is the square's **side length in chunks**, not a radius. A size of 10 is 160 × 160 blocks. Zero disables the border while keeping its centre.

```text
/thm_rmt:worldborderset overworld 10 0 64 0
/thm_rmt:worldborderget overworld
/thm_rmt:worldbordercenter overworld 160 64 -160
/thm_rmt:worldborderset overworld 0
```

The centre input uses block coordinates and selects the containing chunk; Y is ignored. For centre chunk 0,0 and size 10, the included blocks run from -80 through 79 on both axes. Borders cover the dimension's height.

Shrinking a border can leave offline players outside when they return. Changing it does not delete terrain, claims or saved destinations. A border bypass does not bypass claims or locks.



## 🎨 Personal appearance

Players choose their own permitted border texture and colour through Profile > Personal Settings. Those preferences do not change the enforced boundary. Dimension-entry permissions are described separately under Admin.
