<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const onButtonClick = () => {
  loading.value = true
  setTimeout(() => loading.value = false, 2000)
}
</script>

<template>
  <SaButton type="dashed" loading>我在加载</SaButton>
  <SaButton :loading="loading" @click="onButtonClick">{{ loading ? '加载中...' : '点我' }}</SaButton>
  <SaButton disabled>不许你点</SaButton>
</template>
