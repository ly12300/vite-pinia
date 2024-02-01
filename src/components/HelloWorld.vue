<template>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <!-- <div>展示pinia的counter的count值：{{counterStore.count}}</div> -->


  </div>

</template>


<script setup>
import { ref } from 'vue'
// 首先需要引入一下我们刚刚创建的store
import useCounter from '../store/login'
const counterStore = useCounter()
const count = ref(0)
</script>



<style scoped>

</style>
