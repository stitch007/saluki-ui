<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
</script>

<template>
  <SaButton @click="show = true">打开Modal</SaButton>
  <SaModal v-model:show="show">
    <SaCard :bordered="false" style="min-width: 400px;">
      <template #header>
        模态框
      </template>
      <template #header-extra>
        这里应该是个x
      </template>
      <template #default>
        打开Modal后禁止滚动。
      </template>
      <template #footer>
        <div style="text-align: right;">
          <SaButton @click="show = false">好的</SaButton>
        </div>
      </template>
    </SaCard>
  </SaModal>
</template>
