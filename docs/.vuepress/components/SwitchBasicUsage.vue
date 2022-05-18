<script setup lang="ts">
import { ref } from 'vue'

const value = ref(false)
const disabled = ref(true)
const size = ref(false)
</script>

<template>
  <SaSwitch v-model:value="value" />
  <SaSwitch v-model:value="value" :round="false" />
  <SaSwitch v-model:value="disabled" disabled />
  <SaSwitch v-model:value="size" size="small" />
  <SaSwitch v-model:value="size" size="medium" />
  <SaSwitch v-model:value="size" size="large" />
</template>
