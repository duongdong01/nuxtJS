<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">
          Login
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
            <button type="submit" class="btn btn_success btn-submit">
              Login
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span>Have not your account? <nuxt-link to="/register">Register</nuxt-link></span>
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
      isLogin: true

    }
  },
  methods: {

    onsubmit () {
      this.$store.dispatch('authenticateUser', {
        email: this.email,
        password: this.password,
        isLogin: this.isLogin
      }).then((result) => {
        if (result.success) {
          this.$router.push('/decks')
        }
      })
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
