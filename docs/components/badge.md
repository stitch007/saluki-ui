## 徽章 Badge

可恶的小红点。

### 基础用法
 
右上角小红点。

<Demo>
<BadgeBasicUsage />

@[code](@/BadgeBasicUsage.vue)
</Demo>

### 自定义颜色

可以是 `hex` 、 `rgb` 和 `rgba` 。

<Demo>
<BadgeColor />

@[code](@/BadgeColor.vue)
</Demo>

### 溢出

把 `max` 属性的弄成为 `77`。

<Demo>
<BadgeMax />

@[code](@/BadgeMax.vue)
</Demo>

### Badge Props

|名称|说明|类型|默认值|
|---|---|---|---|
|value|数量|`string \| number`|`undefined`|
|color|背景颜色|`string`|`#425aef`|
|max|溢出值，大于这个值将显示 `max+`|`number`|`9`|
|dot|是否显示为小点|`boolean`|`false`|

### Badge Slots

|名称|说明|
|---|---|
|default|填充的内容|
