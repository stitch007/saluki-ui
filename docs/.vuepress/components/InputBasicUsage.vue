<script setup lang="ts">
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="input">
    <SaInput
      v-model:value="username"
      placeholder="请输入用户名"
    />
    <SaInput
      v-model:value="password"
      placeholder="请输入密码"
      type="password"
      show-password-on="mousedown"
    />
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
