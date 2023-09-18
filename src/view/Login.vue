<template>
  <div class="w-full h-full flex items-center justify-center">
    <div class="ocean">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div class="ocean-revert">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
    <div class="login-screen flex flex-col items-center justify-center">
      <div class="title pb-8">
        Login
      </div>
      <div class="w-full flex flex-col items-center justify-center pb-2">
        <div class="title-2">Tên đăng nhập:</div>
        <a-input v-model:value="username" class="login-username login-input">
        </a-input>
      </div>
      <div class="w-full flex flex-col items-center justify-center pb-4">
        <div class="title-2">Mật khẩu:</div>
        <a-input v-model:value="pass" class="login-username login-input" @keydown="enter">
        </a-input>
      </div>
      <a-button @click="handleLogin">
        {{textBtn}}
      </a-button>
    </div>
  </div>
</template>

<script>
const BACKEND_URL = process.env.VUE_APP_BACKEND_URL
import { useApiget } from '@/common/fetch'
import { useCookies } from "vue3-cookies";

export default {
  setup() {
    const { cookies } = useCookies();
    return {cookies}
  },
  data() {
    return {
      username: '',
      pass: '',
      textBtn: 'Xác nhận'
    }
  },
  methods: {
    handleLogin() {
      const url = BACKEND_URL + '/login'
      useApiget(url)
        .then(res => {
          const acc = res.data.find(el => el.username == this.username && el.password == this.pass)
          if (acc) {
            this.cookies.set('access_token', true)
            return this.$router.push('/dashboard')
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    enter(e) {
      if (e.keyCode == 13) this.handleLogin()
    }
  }
}
</script>