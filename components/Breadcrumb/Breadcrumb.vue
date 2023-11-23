<script setup lang="ts">
import { useRoute,useRouter } from 'vue-router'
import { computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const router = useRouter();
const route = useRoute()
console.log(router.currentRoute.value.matched);

//计算属性
const breadList = computed(() => {
  return (route.matched.filter(item => item.meta.title)) || []
})
</script>

<template>
  <el-breadcrumb :separator-icon="ArrowRight" class="breadcrumb">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index" :to="{ path: item?.path}">
      {{ item?.meta?.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang="scss" scoped>

</style>