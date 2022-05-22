/* eslint-disable vue/require-default-prop */
<template>
  <li>
    <nuxt-link class="deck" :to="`/decks/${id}`">
      <div class="card deck-card">
        <img :src="thumbnail">
        <div class="card_body">
          <h3>{{ name }} {{id}}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'DeskItem',
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    id: {
      type: String,
      require: true
    },

    name: {
      type: String,
      require: true
    },

    description: {
      type: String,
      default: ''
    },
    thumbnail: {
      type: String,
      require: true
    }
  }
}
</script>
