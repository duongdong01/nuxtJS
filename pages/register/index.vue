<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">
          Register
        </h3>
        <form @submit.prevent="onsubmit">
          <div class="form_group">
            <label for="email">Email</label>
            <input id="Email" v-model="email" class="form_control" type="text" placeholder="example@gmail.com">
          </div>
          <div class="form_group">
            <label for="password">password</label>
            <input id="password" v-model="password" class="form_control" type="password" placeholder="please enter password">
          </div>
          <div class="form_group">
            <label for="re-password">Re-password</label>
            <input id="re-password" v-model="rePassword" class="form_control" type="password" placeholder="please enter  re-password">
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-submit">
              Register
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span>Have your account? <nuxt-link to="/login">Login</nuxt-link></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  layout: 'auth',
  data () {
    return {
      email: '',
      password: '',
      rePassword: ''
    }
  },
  methods: {
    checkVaildPassword () {
      return this.password === this.rePassword
    },
    onsubmit () {
      const vaildPassword = this.checkVaildPassword()
      if (vaildPassword) {
        this.$store.dispatch('authenticateUser', {
          email: this.email,
          password: this.password

        }).then((result) => {
          if (result) {
            this.$router.push('/login')
          }
        })
      } else {
        console.log('password is not vaild')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page{
    padding-top:100px ;
    display: flex;
        justify-content: center;
    .card-form{
        width: 500px;
    }
    .btn-submit{
        width: 100%;
    }
}
</style>
