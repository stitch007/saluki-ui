## 输入框 Input

输入字符。

### 基础用法

账号和密码。

<Demo>
<InputBasicUsage />

@[code](@/InputBasicUsage.vue)
</Demo>

### 尺寸

有 `small` 、 `medium` 和 `large` 三种 `size`。

<Demo>
<InputSize />

@[code](@/InputSize.vue)
</Demo>

### 圆角、长度限制和禁用

`input` 可以是圆角的，可以限制长度，可以禁用。

<Demo>
<InputOther />

@[code](@/InputOther.vue)
</Demo>

### Input Props

|名称|说明|类型|默认值|
|---|---|---|---|
|value|文本输入的值(v-model)|`string`|`undefined`|
|type|输入框的类型|`'text' \| 'password''`|`text`|
|size|输入框的尺寸|`'small' \| 'medium' \| 'large'`|`medium`|
|placeholder|提示文字|`string`|`请输入`|
|show-password-on|触发显示密码的方式|`'click' \| 'mousedown''`|`mousedown`|
|max-length|最大输入长度|`number`|`undefined`|
|round|输入框是否为圆角|`boolean`|`false`|
|disabled|输入框是否禁用|`boolean`|`false`|
