import { defineStore } from 'pinia';
import axios from 'axios';


const useLogin = defineStore('login', {
  // 持久化设置
  persist: {
    // key自定义
    key: "USER",
    // 本地存储方式
    storage: sessionStorage,
    // 存储内容
    paths: ["token"]
  },
  // 相当ref()
  state: () => ({
    token: '',
   
  }),
// 相当于function()
  actions: {
    // 传参
    async login(name,password) {
      try{
          const response = await axios.post('http://127.0.0.1:4523/m1/3984196-0-default/usr/login', {
        name: name,
        password: password
      });
      console.log("回答", response);
      // 赋值
      const {token ,code}=response.data;
      if(code==0){
        this.token=token
      }
      } catch (error) {
        // 处理请求失败或异常情况
          console.error('错误:', error);
      }

    },

    logout() {
      // 清空状态中的 token
      this.token = '';
    }
  }
});

export default useLogin;
