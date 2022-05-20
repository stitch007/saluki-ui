## 扩散的波浪 Wave

给组件套上扩散效果。

### 基础用法

使用该组件需要父元素开启相对定位，即 `position: relative;`。

<Demo>
<WaveBasicUsage />

@[code](@/WaveBasicUsage.vue)
</Demo>

### Wave Props

|参数|说明|类型|默认值|
|---|---|---|---|
|type|类型|`'single'` \| `'infinite'`|`'single'`|
|color|波浪的颜色|`string`|`#425aef`|
|opacity|开始时的透明度(0-1)|`number`|`0.6`|
|easing|动画的效果|`string`|`cubic-bezier(0, 0, 0.2, 1)`|
|duration|动画播完的时间(ms)|`number`|`600`|
