## 模态框 Modal

会弹出来的框框。

### 基础用法

可以把任何东西放进去，默认情况下它什么也没有。

<Demo>
<ModalBasicUsage />

@[code](@/ModalBasicUsage.vue)
</Demo>

### Modal Props

|名称|说明|类型|默认值|
|---|---|---|---|
|show|是否展示 `modal`|`boolean`|`'false'`|
|mask-closable|点击遮罩时是否关闭 `modal`|`boolean`|`true`|
|z-index|`modal` 的 `z-index`|`number`|`999`|

### Modal Slots

|名称|说明|
|---|---|
|default|内容|
