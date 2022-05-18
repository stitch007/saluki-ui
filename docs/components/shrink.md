## 收缩的边框 Shrink

给组件套上一个收缩的边框。

### 基础用法

就酱。

<Demo>
<ShrinkBasicUsage />

@[code](@/ShrinkBasicUsage.vue)
</Demo>

### Shrink Props

|参数|说明|类型|默认值|
|---|---|---|---|
|keep-active|一直激活|`boolean`|`false`|
|padding|内边距|`string`|`'6px 12px'`|
|color|激活时的背景颜色|`string`|`#425aef`|
|text-color|激活时的内容颜色|`string`|`#fff`|
|duration|动画播完的时间(ms)|`number`|`300`|
|border-radius-from|动画开始时的 `border-radius`|`string`|`'2px'`|
|border-radius-to|目标 `border-radius`|`string`|`'12px'`|
|easing|easing function|`string`|`'ease-in-out'`|

### Shrink Slots

|名称|说明|
|---|---|
|default|内容|
