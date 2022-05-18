## 下拉框 Dropdown

出现更多东西。

### 基础用法

你可以在下拉框里放入任何东西。

<Demo>
<DropdownBasicUsage />

@[code](@/DropdownBasicUsage.vue)
</Demo>

### Dropdwon Props

|名称|说明|类型|默认值|
|---|---|---|---|
|trigger|触发方式|`'click' \| 'hover'`|`'hover'`|
|top|下拉框距离触发源的距离|`number`|`8`|
|show-arrow|是否显示箭头|`boolean`|`false`|

### Dropdwon Slots

|名称|说明|
|---|---|
|default|触发源|
|options|下拉框本体|
