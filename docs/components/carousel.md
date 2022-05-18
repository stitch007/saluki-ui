## 轮播 Carousel

推销东西。

### 基础用法

`autoplay` 默认关闭， `show-dots` `show-arrow` 默认开启。

<Demo>
<CarouselBasicUsage />

@[code](@/CarouselBasicUsage.vue)
</Demo>

### Carousel Props

|名称|说明|类型|默认值|
|---|---|---|---|
|show-dots|是否显示指示点|`boolean`|`true`|
|show-arrow|是否显示箭头|`boolean`|`true`|
|autoplay|是否自动播放|`boolean`|`false`|
|interval|自动播放周期(ms)|`number`|`5000`|
|duration|播完动画的时间(ms)|`number`|`300`|

### Carousel Slots

|名称|说明|
|---|---|
|default|内容|
