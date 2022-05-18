<script setup lang="ts">
import { ref } from 'vue'

const value = ref<string[]>([])
</script>

<template>
  <SaCheckboxGroup v-model:value="value" :max="3" :min="1">
    <SaCheckbox value="刻晴">
      刻晴
    </SaCheckbox>
    <SaCheckbox value="凝光">
      凝光
    </SaCheckbox>
    <SaCheckbox value="神里绫华">
      神里绫华
    </SaCheckbox>
    <SaCheckbox value="雷电将军">
      雷电将军
    </SaCheckbox>
  </SaCheckboxGroup>
</template>
