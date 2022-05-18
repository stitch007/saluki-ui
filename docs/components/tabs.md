## 标签页 Tabs

在同个地方显示不同内容。

### 基础用法

`Tabs` 组件默认选中第一个标签页，可以通过 `active` 属性来指定当前选中的标签页。

<Demo>
<TabsBasicUsage />

@[code](@/TabsBasicUsage.vue)
</Demo>

### 尺寸

有 `small` 、 `medium` 和 `large` 三种 `size`。

<Demo>
<TabsSize />

@[code](@/TabsSize.vue)
</Demo>

### 前缀&后缀

可以在 `label` 中插入 `prefix` 和 `suffix`。

<Demo>
<TabsSlot />

@[code](@/TabsSlot.vue)
</Demo>

### 类型

两种 `type` ， `shrink` 和 `bar`， 默认是 `bar`。

<Demo>
<TabsType />

@[code](@/TabsType.vue)
</Demo>

### 禁用

`disabled`。

<Demo>
<TabsDisabled />

@[code](@/TabsDisabled.vue)
</Demo>

### Tabs Props

|名称|说明|类型|默认值|
|---|---|---|---|
|active|当前标签|`number`|`0`|
|type|标签页的类型|`'bar'` \| `'shrink'`|`'bar'`|
|size|标签页的大小|`'small' \| 'medium' \| 'large'`|`'medium'`|

### TabPanel Props

|名称|说明|类型|默认值|
|---|---|---|---|
|name|label的名字|`string`|`undefined`|
|disabled|是否禁用|`boolean`|`false`|

### Tabs Slots

|名称|说明|
|---|---|
|default|面板|
|prefix|label栏左侧|
|suffix|label栏右侧|

### TabPanel Slots

|名称|说明|
|---|---|
|default|标签页的内容|
