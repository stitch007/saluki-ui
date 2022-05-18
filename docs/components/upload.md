## 上传 Upload

你需要自己把文件传到服务器。

### 文件

使用 `max` 限制上传文件的最大数量，
开启 `multiple` 支持多个文件同时选中， 
开启 `showFileList` 显示已上传的文件列表。

<Demo>
<UploadFile />

@[code](@/UploadFile.vue)
</Demo>

### 图片和预览

可以看。

<Demo>
<UploadImage />

@[code](@/UploadImage.vue)
</Demo>

### Upload Props

|名称|说明|类型|默认值|
|---|---|---|---|
|on-change|文件上传后触发|`(files: File[]) => void`|`-`|
|type|上传的类型|`'file' \| 'image'`|`'file'`|
|max|上传文件的最大数量|`number`|`undefined`|
|multiple|是否开启多个文件同时选中|`boolean`|`false`|
|show-file-list|是否显示已上传的文件列表|`boolean`|`true`|

### Upload Emit

|名称|说明|类型|
|---|---|---|
|change|文件上传后触发|`(files: File[]) => void`|
|error|文件上传失败触发|`(message: string) => void`|

### Upload Slots

|名称|说明|
|---|---|
|default|触发文件上传的内容|
