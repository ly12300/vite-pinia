<template>
  <div>
    <h1>Login Component</h1>
    <div v-if="!isLoggedIn">
      <input v-model="username" placeholder="Username">
      <input v-model="password" placeholder="Password" type="password">
      <button @click="login">Login</button>
    </div>
    <div v-else>
      <!-- <p>Welcome, {{ $store.login.token }}</p> -->
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
// import useLogin from '../store/login'
import { onMounted } from 'vue';
import axios from 'axios'

// const { token } = useLogin()
let username = ''
let password = ''
// console.log("汉化",token);
const isLoggedIn = ''
onMounted(()=>{
  axios.post('http://127.0.0.1:4523/m1/3984196-0-default/usr/login',{name:"张三",password:"123456"}).then(
    res=>{
      console.log("回答",res);
    }
  )
})
const login = async () => {
  // await useLogin.login({ name:username, password: password})
}

const logout = () => {
  // useLogin.logout()
}
</script>
