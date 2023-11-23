<script setup lang="ts">
import type {NavItem} from "~/types/nav";

const navList = reactive<NavItem[]>([
  {
    path:'/',
    label: '首页',
  },
  {
    path: '/article',
    label: '文章'
  }
])
</script>

<template>
 <div class="header">
   <NavBar :nav-list="navList" />
 </div>
</template>

<style scoped lang="scss">

</style>