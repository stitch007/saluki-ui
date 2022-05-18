<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <SaTabs v-model:active="active" type="shrink">
    <SaTabPanel name="你好">
      <span style="font-size: 36px; font-weight: 600">你好</span>
    </SaTabPanel>
    <SaTabPanel name="我不好">
      <span style="font-size: 36px; font-weight: 600">我不好</span>
    </SaTabPanel>
  </SaTabs>
</template>
