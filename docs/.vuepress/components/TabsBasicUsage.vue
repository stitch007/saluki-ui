<script setup lang="ts">
import { ref } from 'vue'

const active = ref(0)
</script>

<template>
  <SaTabs v-model:active="active">
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
