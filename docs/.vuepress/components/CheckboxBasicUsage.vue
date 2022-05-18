<script setup lang="ts">
import { ref } from 'vue'

const checked = ref(false)
const disabled = ref(false)
const size = ref(false)
</script>

<template>
  <SaCheckbox v-model:checked="checked">复选框</SaCheckbox>
  <SaCheckbox v-model:checked="disabled" disabled>不许点</SaCheckbox>
  <SaCheckbox v-model:checked="disabled">点我试试</SaCheckbox>
  <SaCheckbox v-model:checked="size" size="small" >小</SaCheckbox>
  <SaCheckbox v-model:checked="size" size="medium" >不小</SaCheckbox>
  <SaCheckbox v-model:checked="size" size="large" >不小小</SaCheckbox>
</template>
