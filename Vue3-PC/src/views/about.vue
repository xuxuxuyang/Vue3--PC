<template>
  <div class="">about页面</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(() => {
  console.log(route.path)
})
</script>
<style scoped></style>
