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
  <div style="min-width: 300px;">
    <SaUpload @change="(files) => onChange(files)" :multiple="true" :max="3">
      <SaButton>上传文件</SaButton>
    </SaUpload>
  </div>
</template>
