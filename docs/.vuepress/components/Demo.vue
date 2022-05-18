<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = withDefaults(defineProps<{
  direction?: 'col' | 'row'}
>(), {
  direction: 'row',
})

const isShowCode = ref(false)

const handleClick = () => {
  isShowCode.value = !isShowCode.value
}

const onCodeEnter = (el: HTMLElement) => {
  el.style.height = 'auto'
  const finalHeight = window.getComputedStyle(el).height
  el.style.height = '0px'
  el.offsetHeight // 触发重排
  el.style.height = finalHeight
}

const onCodeAfterEnter = (el: HTMLElement) => {
  el.style.height = 'auto'
}

const onCodeLeave = (el: HTMLElement) => {
  el.style.height = window.getComputedStyle(el).height
  el.offsetHeight
  el.style.height = '0px'
}
</script>

<template>
  <div class="container">
    <div class="demo" :class="`direction-${direction}`">
      <Component :is="$slots.default?.()[0]"></Component>
    </div>
    <hr class="split-line">
    <Transition
      @enter="onCodeEnter"
      @after-enter="onCodeAfterEnter"
      @leave="onCodeLeave"
    >
      <div class="code" v-show="isShowCode">
        <Component :is="$slots.default?.()[1]"></Component>
      </div>
    </Transition>
    <div class="show-code-button" @click="handleClick">
      <div v-if="isShowCode">
        <span>隐藏代码</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.12 14.71L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0L6.7 13.3a.996.996 0 0 0 0 1.41c.39.38 1.03.39 1.42 0z"
          />
        </svg>
      </div>
      <div v-else>
        <span>显示代码</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="32" height="32"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M8.12 9.29L12 13.17l3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0L6.7 10.7a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  padding: 16px 20px 4px;
  border: 1px solid rgb(239, 239, 245);
  border-radius: 6px;
}

.dark .container {
  border-color: rgb(62, 76, 90);
}

.container > .split-line {
  margin-top: 16px;
  margin-bottom: 6px;
}

.container > .demo {
  display: flex;
}

.container > .direction-row {
  align-items: center;
  flex-wrap: wrap;
}

.container > .direction-col{
  flex-direction: column;
}

.container > .direction-row > * {
  margin-right: 16px;
}

.container > .direction-col > * {
  margin-bottom: 16px;
}

.container > .show-code-button {
  text-align: center;
  color: rgba(51, 54, 57, 0.6);
  cursor: pointer;
}

.dark .container > .show-code-button {
  color: rgba(173, 186, 199, 0.6);
}

.container > .show-code-button > * {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s;
}

.container > .show-code-button > *:hover {
  color: #425aef;
}

.container > .show-code-button > * > span {
  font-size: 14px;
}

.container > .code pre {
  margin-bottom: 6px;
}

.container > .code {
  transition: height .3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}
</style>
