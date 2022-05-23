/* eslint-disable vue/no-unused-vars */
<template>
  <div>
    <default-header />

    <nuxt />
    <default-footer />

    <v-modal v-slot="payload" name="DeckFormModal">
      <!-- {{payload}} -->
      <h2>{{ payload && payload.payload ? 'Edit a deck': 'Create a new deck' }}</h2>
      <deck-form :deck="payload.payload" @submit="onsubmit" />
    </v-modal>
  </div>
</template>
<script>
// import axios from 'axios'

import DeckForm from '~/components/decks/DeckForm.vue'
import DefaultHeader from '~/components/DefaultHeader.vue'
import DefaultFooter from '~/components/DefaultFooter.vue'
export default {
  name: 'DefaultLayout',
  components: {
    DeckForm,
    DefaultHeader,
    DefaultFooter
  },
  methods: {
    onsubmit (deckdata) {
      if (deckdata && !deckdata.id) {
        this.$store.dispatch('addDeck', deckdata).then(() => this.$modal.close({ name: 'DeckFormModal' }))
      } else {
        this.$store.dispatch('editDeck', deckdata).then(() => {
          this.$modal.close({ name: 'DeckFormModal' })
          this.$router.push('/decks')
        })
      }
    }
  }
}
</script>
