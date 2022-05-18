<script setup lang="ts">
import { ref } from 'vue'

const round = ref('')
const maxLength = ref('')
const disabled = ref('')
</script>

<template>
  <div class="input">
    <SaInput v-model:value="round" placeholder="圆润" round />
    <SaInput v-model:value="maxLength" placeholder="最多只能输入16个字符" :max-length="16" />
    <SaInput v-model:value="disabled" placeholder="禁止输入" disabled />
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
