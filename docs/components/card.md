## 卡片 Card

放东西进去。

### 基础用法

普通卡片。

<Demo>
<CardBasicUsage />

@[code](@/CardBasicUsage.vue)
</Demo>

### 尺寸

有 `small` 、 `medium` 和 `large` 三种 `size`。

<Demo direction="col">
<CardSize />

@[code](@/CardSize.vue)
</Demo>

### 无边框

什么都可以没有， `bordered` 弄成 `false` 干掉边框。

<Demo>
<CardBorder />

@[code](@/CardBorder.vue)
</Demo>

### 阴影效果

`shadow` 属性可以设置卡片阴影出现的时机，它有3个值： `always` 、 `hover` 和 `none` 。

<Demo direction="col">
<CardShadow />

@[code](@/CardShadow.vue)
</Demo>

### 插槽

一共4插槽。

<Demo>
<CardSlot />

@[code](@/CardSlot.vue)
</Demo>

### Card Props

|名称|说明|类型|默认值|
|---|---|---|---|
|size|卡片的大小|`'small' \| 'medium' \| 'large'`|`'medium'`|
|shadow|阴影效果出现的时机|`'always' \| 'hover' \| 'none'`|`none`|
|bordered|是否显示边框|`boolean`|`true`|

### Card Slots

|名称|说明|
|---|---|
|header|头部内容|
|header-extra|头部额外内容|
|default|卡片内容|
|footer|底部内容|
