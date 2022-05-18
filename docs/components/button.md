## 按钮 Button

按钮用来触发一些操作。

### 类型

按钮的 `type` 分别为 `default` 、 `ghost` 和 `dashed`。

<Demo>
<ButtonType />

@[code](@/ButtonType.vue)
</Demo>

### 自定义颜色

支持自定义 `color` 、 `textColor`。

<Demo>
<ButtonColor />

@[code](@/ButtonColor.vue)
</Demo>

### 尺寸

有 `small` 、 `medium` 和 `large` 三种 `size`。

<Demo>
<ButtonSize />

@[code](@/ButtonSize.vue)
</Demo>

### 形状

圆 `circle` 、半圆 `round`。

<Demo>
<ButtonShape />

@[code](@/ButtonShape.vue)
</Demo>

### 禁用和加载

按钮有禁用和加载状态。

<Demo>
<ButtonState />

@[code](@/ButtonState.vue)
</Demo>

### Button Props

|名称|说明|类型|默认值|
|---|---|---|---|
|type|按钮的类型|`'default' \| 'ghost' \| 'dashed'`|`'default'`|
|size|按钮的大小|`'small' \| 'medium' \| 'large'`|`'medium'`|
|color|背景和边框的颜色|`string`|`#425aef`|
|text-color|内容的颜色|`string`|`#fff`|
|round|按钮是否显示圆角|`boolean`|`false`|
|circle|按钮是否为圆形|`boolean`|`false`|
|loading|按钮是否加载|`boolean`|`false`|
|disabled|按钮是否禁用|`boolean`|`false`|

### Button Slots

|名称|说明|
|---|---|
|default|按钮的内容|
