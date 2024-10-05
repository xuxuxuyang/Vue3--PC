<template>
  <div class="">
    Home 页面 {{ homestore.id }}
    <div @click="changehomeid">改变id
    </div>
    <div @click="checkroute">切换路由</div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import {usehomestore} from '../stores/home'
const router = useRouter()
const route = useRoute()
const checkroute = () => {
  router.push('/about')
  console.log(route.path, 111)
}


const homestore = usehomestore()
console.log(homestore,222)
const changehomeid = () => {
  homestore.id = 888
}
</script>
<style scoped></style>
