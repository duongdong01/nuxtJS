/* eslint-disable promise/param-names */
<template>
  <div class="ct">
    <div class="d_flex justify_content_between my_3">
      <h3>List of your decks:</h3>
      <button class="btn btn_success" @click.prevent="openModal">
        Create a Deck
      </button>
    </div>
    <ul class="decks-list">
      <deck-list
        v-for="deck in decks"
        :id="deck.id"
        :key="deck.id"
        :name="deck.name"
        :description="deck.description"
        :thumbnail="deck.thumbnail"
      />
    </ul>
    <!-- modal -->
  </div>
</template>

<script>

import DeckList from '~/components/decks/DeckList.vue'
export default {
  components: {
    DeckList

  },
  head: {
    title: 'My Decks | Learning Language'
  },

  // created () {
  //   this.$store.dispatch('setDecks', this.decks)
  //   console.log(this.$store.getters.decks)
  // },
  computed: {
    decks () {
      return this.$store.getters.decks
    }
  },
  methods: {

    showDeck () {
      this.$router.push('/decks/' + this.deckId)
      //   this.$route.push(`decks/${this.deckId}`)
      console.log(this.deckId)
    },

    openModal () {
      console.log('ok')
      this.$modal.open({ name: 'DeckFormModal' })
    }

  }
}
</script>

<style lang="scss">
    .decks-list{

        .deck{
            display: block;
        }
        li{
            margin-bottom:1rem;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .deck-card{
            display: flex;
            flex-direction: row;
            height: 250px;
            img{
               width: 250px;
               height: auto;
            }
        }
    }
</style>
