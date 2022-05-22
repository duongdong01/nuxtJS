<template>
  <div class="c_3">
    <div class="cards">
      <div class="card">
        <div class="front-card">
          <img :src="picture" alt="Photto">
        </div>
        <div class="back-card">{{keyword}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    picture: {
      type: String,
      require: true
    },
    keyword: {
      type: String,
      require: true
    }
  }
}
</script>
