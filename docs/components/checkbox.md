## 复选框 Checkbox

多选几个。

### 基础用法

支持禁用和大小。

<Demo>
<CheckboxBasicUsage />

@[code](@/CheckboxBasicUsage.vue)
</Demo>

### 选项组

选老婆，最多选3个，最少一个。

<Demo>
<CheckboxGroup />

@[code](@/CheckboxGroup.vue)
</Demo>

### Checkbox Props

|名称|说明|类型|默认值|
|---|---|---|---|
|checked|是否选中|`boolean`|`false`|
|value|Checkbox 在 CheckboxGroup 中使用的值|`string`|`undefined`|
|size|复选框的大小|`'small' \| 'medium' \| 'large'`|`'medium'`|
|disabled|是否禁用Checkbox|`boolean`|`false`|

### CheckboxGroup Props

|名称|说明|类型|默认值|
|---|---|---|---|
|value|选项组的值|`string[]`|`[]`|
|max|可被勾选的 checkbox 的最大数量|`number`|`undefined`|
|min|可被勾选的 checkbox 的最小数量|`number`|`undefined`|

### Checkbox Slots

|名称|说明|
|---|---|
|default|Checkbox 的标签内容|

### CheckboxGroup Slots

|名称|说明|
|---|---|
|default|Checkbox 组|
