<template>
  <SaDropdown>
    <SaButton>悬浮！</SaButton>
    <template #options>
      <div class="options">
        <SaShrink>复选框</SaShrink>
        <SaShrink>下拉框</SaShrink>
        <SaShrink>模态框</SaShrink>
      </div>
    </template>
  </SaDropdown>
  <SaDropdown trigger="click">
    <SaButton>点击！</SaButton>
    <template #options>
      <div class="options">
        <SaShrink>复选框</SaShrink>
        <SaShrink>下拉框</SaShrink>
        <SaShrink>模态框</SaShrink>
      </div>
    </template>
  </SaDropdown>
</template>

<style scoped>
.options {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  background-color: #fff;
  border-radius: 8px;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
              0 6px 16px 0 rgba(0, 0, 0, 0.08),
              0 9px 28px 8px rgba(0, 0, 0, 0.05);
}
</style>
