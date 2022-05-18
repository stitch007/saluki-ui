<template>
  <SaCard shadow="always">
    <template #header>
      有box-shadow的卡片
    </template>
    <template #default>
      有box-shadow的卡片的内容
    </template>
  </SaCard>
  <SaCard shadow="hover">
    <template #header>
      鼠标移过来
    </template>
    <template #default>
      过来啊
    </template>
  </SaCard>
</template>
