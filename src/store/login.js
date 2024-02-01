import { defineStore } from 'pinia';
import { getCurrentInstance } from 'vue';

const useLogin = defineStore('login', {
  state: () => ({
    token: ''
  }),

  actions: {
    async login(userData) {
      const instance = getCurrentInstance();
      if (!instance) {
        console.error('Cannot access component instance');
        return;
      }

      const { token, code } = await axios.post('http://192.168.2.2:4523/m1/3984196-0-default/usr/login', userData)
                                        .then(response => response.data)
                                        .catch(error => {
                                          console.error('请求失败:', error.message);
                                          return {};
                                        });

      if (code === 0) {
        // 修改状态中的 token
        instance.ctx.token = token;
      } else {
        // 处理登录失败的情况
        console.error('登录失败');
      }
    },

    logout() {
      const instance = getCurrentInstance();
      if (!instance) {
        console.error('Cannot access component instance');
        return;
      }

      // 清空状态中的 token
      instance.ctx.token = '';
    }
  }
});

export default useLogin;
