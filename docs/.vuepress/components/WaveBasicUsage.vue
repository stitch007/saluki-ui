<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { WaveRef } from 'saluki-ui'

const singleEl = ref<WaveRef>()
const infiniteEl = ref<WaveRef>()

const onWaveClick = () => {
  singleEl.value && singleEl.value?.play()
}

onMounted(() => {
  infiniteEl.value && infiniteEl.value?.play()
})
</script>

<template>
  <div class="wave" style="" @click="onWaveClick">
    <span>点我看效果</span>
    <SaWave ref="singleEl" type="single" />
  </div>
  <div class="wave" style="background-color: #5352ed;">
    <span>根本停不下来~</span>
    <SaWave ref="infiniteEl" type="infinite" />
  </div>
</template>

<style scoped>
.wave {
  position: relative;
  padding: 6px 12px;
  background-color: #e84393;
  border-radius: 6px;
  color: white;
}
</style>
