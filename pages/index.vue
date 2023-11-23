<script setup lang="ts">
import Default from "~/layouts/Default.vue";
import {useNuxtApp} from "#app";
import request from "~/utils/request";
import {userLogin} from "~/api/login";


const { $axios } = useNuxtApp()
onMounted(async () => {
 try {
   const res = await userLogin({
     username: 'yan',
     password: '123456789'
   })
   console.log(res)
   console.log(123,$axios)
   const data =res.data.value;
   console.log(data);
 }catch (err) {
   console.log(err)
 }
})
</script>

<template>
  <Default>
    <template #header>
      <Header/>
    </template>
    <template #aside>

    </template>
    <template #main>
      <NuxtPage/>
    </template>
    <template #footer>

    </template>
  </Default>
</template>

<style scoped>

</style>