<template>
  <div>
    <h1>Login Component</h1>
    <div v-if="!isLoggedIn">
      <input v-model="userdata.name" placeholder="Username">
      <input v-model="userdata.password" placeholder="Password" type="password">
      <button @click="login">Login</button>
    </div>
    <div v-else>
      <!-- <p>Welcome, {{ $store.login.token }}</p> -->
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive , nextTick} from 'vue';
import axios from 'axios';

let userdata = reactive({
  name: "",
  password: ""
});

let isLoggedIn = false;

const login = async () => {
  try {
    const response = await axios.post('http://127.0.0.1:4523/m1/3984196-0-default/usr/login', {
      name: userdata.name,
      password: userdata.password
    });
    console.log("回答", response);
    // 根据接口返回的结果进行相应的操作
    isLoggedIn = true;
     // 使用 $nextTick 确保 DOM 更新完成后再执行操作
     nextTick(() => {
      // 可以在这里执行需要在视图更新后立即进行的操作
      console.log("视图已更新");
    });
  } catch (error) {
    console.error("请求错误", error);
  }
};

const logout = () => {
  // useLogin.logout()
  isLoggedIn = false;
};

onMounted(() => {
  console.log("汉化QWQR");
});
</script>
