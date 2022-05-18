<script setup lang="ts">
import { ref } from 'vue'

const small = ref('')
const medium = ref('')
const large = ref('')
</script>

<template>
  <div class="input">
    <SaInput v-model:value="small" placeholder="小" size="small" />
    <SaInput v-model:value="medium" placeholder="不小" size="medium" />
    <SaInput v-model:value="large" placeholder="大" size="large" />
  </div>
</template>

<style scoped>
.input {
  max-width: 300px;
}

.input > * {
  margin: 6px 0;
}
</style>
