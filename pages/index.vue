<template>
  <div class="ct">
    <event-alert></event-alert>
    <div class="banner">
      <div class="thumbnail-banner" />
    </div>
    <div class="popular-decks">
      <h3 class="text_center my_3">
        Popular Decks for you
      </h3>
      <div class="r">
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
        <div class="c_4">
          <div class="card">
            Deck 1
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventAlert from '~/components/Alert/EventAlert.vue';
export default {
    name: "IndexPage",
    components: { EventAlert }
}
</script>

<style lang="scss">
/* .container{
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
} */
.banner{
  height: 220px;
  margin-top:2rem ;
  .thumbnail-banner{
    height: inherit;
    background:url("https://previews.123rf.com/images/nataliias/nataliias1812/nataliias181200017/127109518-english-language-hand-drawn-doodles-and-lettering-education-banner-vector-illustration-.jpg") center center ;
  background-size: cover;
 }
}
</style>
