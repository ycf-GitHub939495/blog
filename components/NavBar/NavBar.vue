<script setup lang="ts">
import type {NavItem} from "~/types/nav";
const props = defineProps<{
  navList: NavItem[]
}>()
</script>

<template>
  <nav>
    <ul>
      <li v-for="(item,index) in navList" :key="index">
        <NuxtLink :to="item.path">{{item.label}}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
nav {
  display: flex;
  justify-content: center;
  height: 60px;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    li {
      margin: 0 10px;

      line-height: 60px;
    }
  }
}

</style>