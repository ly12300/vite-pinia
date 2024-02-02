<template>
  <div>
    这是首页
    <div>
      <!-- 登出 -->
      <button @click="logout">LogOut</button>
      <button><router-link to="/hello">Hello</router-link></button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
// 导入pinia
import usrLogin from '../store/login'
// 实例化
const router = useRouter();
const usrlogin =usrLogin();
// 登出
const logout = () => {
  usrlogin.logout()
  router.push('/home')
};
</script>

<style>

</style>