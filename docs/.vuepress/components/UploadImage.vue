<script setup lang="ts">
import { ref } from 'vue'

const value = ref<File[]>([])
const onChange = (files: File[]) => {
  value.value = files
  // const formData = new FormData()
  // formData.append('file', files[0])
  // axios.post('/upload', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
}
</script>

<template>
  <SaUpload type="image" @change="(files) => onChange(files)" />
</template>
