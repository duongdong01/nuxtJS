<template>
  <div class="main">
    <h3>General settings....</h3>
  </div>
</template>

<script>
export default {
  middleware: ['check-auth', 'auth']
}
</script>
<style lang="scss">
        .main{
            margin-left: 3rem;
        }
</style>
