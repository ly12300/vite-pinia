<template>
  <div>
    <h1>Login Component</h1>
    <div >
      <!-- 双向绑定数据，方便提交 -->
      <input v-model="userdata.name" placeholder="Username">
      <input v-model="userdata.password" placeholder="Password" type="password">
      <!-- 提交 -->
      <button @click="login">Login</button>
      <div>
             <button><router-link to="/hello">跳转</router-link></button>
      </div>
 
    </div>

  </div>
</template>

<script setup>
// 获取router实例
import { useRouter } from 'vue-router';
import { onMounted, reactive } from 'vue';
// 导入pinia
import usrLogin from '../store/login'
// 响应式数据
let userdata = reactive({
  name: "",
  password: ""
});
// 实例化
const router = useRouter();
const usrlogin =usrLogin();
// 登录
const login = async () => {
 // 使用 actions，当作函数一样直接调用
 // login action 定义为了 async 函数，所以它返回一个 Promise
 await usrlogin.login(userdata.name,userdata.password)
  if(usrlogin.token){
    router.push('/')
  }
}



onMounted(() => {
  console.log("汉化QWQR",usrlogin.token);
});
</script>
