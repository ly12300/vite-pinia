<template>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <!-- <div>展示pinia的counter的count值：{{counterStore.count}}</div> -->


  </div>

</template>


<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>



<style scoped>

</style>
