<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <SaTabs v-model:active="active">
    <template #prefix>
      <div style="margin-right: 20px;">我是prefix</div>
    </template>
    <template #suffix>
      <div style="margin-left: 20px;">我是suffix</div>
    </template>
    <SaTabPanel name="Jawa">
      Jawa大法好！
    </SaTabPanel>
    <SaTabPanel name="AnyScript">
      你好，AnyScript
    </SaTabPanel>
    <SaTabPanel name="C艹">
      C艹艹艹
    </SaTabPanel>
  </SaTabs>
</template>
