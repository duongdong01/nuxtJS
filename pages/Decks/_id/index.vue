<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck : {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">
            Start now
          </button>
          <button class=" btn btn_primary" @click.prevent="openModal('CreateCardModal')">
            Create a card
          </button>
          <button class=" btn btn_warning" @click.prevent="openModal('DeckFormModal')">
            Edit Deck
          </button>
          <button class="btn btn_danger" @click.prevent="openModalDelte('DeleteCard')">
            Delete Deck
          </button>
        </div>
        <hr class="divide">
        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :picture="card.picture"
            :keyword="card.keyword"
          />
        </div>
      </div>
    </div>
    <v-modal name="CreateCardModal">
      <h2>Create a new Card</h2>
      <form action="">
        <div class="form_group">
          <label for="Name">Name:</label>
          <input id="Name" type="text" name="Name" class="form_control" placeholder="please enter name deck">
        </div>
        <div class="form_group">
          <label for="Description">Description:</label>
          <textarea id="Description" name="Description" class="form_control" placeholder="please enter Description" />
        </div>
        <div class="form_group">
          <label for="">Thumbnail:</label>
          <input id="Name" type="file" name="Name" placeholder="please enter name deck">
          <div class="preview" />
        </div>
        <div class="form_group d_flex justify_content_end">
          <button class="btn btn_danger" @click.prevent="closeModal">
            Close
          </button>
          <button class="btn btn_success ml_1" @click.prevent="createDeck">
            Create Card
          </button>
        </div>
      </form>
    </v-modal>

    <v-modal name="DeleteCard">
      <h2>Are you sure you want to delete?</h2>
      <div class="d_flex justify_content_end">
        <button class="btn btn_secondary mr_3 btn_no">
          No
        </button>
        <button class="btn btn_success btn_yes">
          Yes
        </button>
      </div>
    </v-modal>
  </section>
</template>

<script>
import axios from 'axios'

import CardList from '~/components/cards/CardList.vue'
export default {
  components: {
    CardList
  },
  // eslint-disable-next-line no-dupe-keys
  asyncData (context) {
    return axios.get(`https://nuxt-learning-english-9f050-default-rtdb.firebaseio.com/deck/${context.params.id}.json`).then((response) => {
      console.log(response)
      return {
        deck: response.data
      }
    }).catch((e) => {
      context.error(e)
    })
  },
  data () {
    return {
      cards: [
        {
          _id: 1,
          picture: 'https://www.deco-crystal.com/wp-content/uploads/2021/11/y-tuong-thiet-ke-shop-thoi-trang-nam.jpg',
          keyword: 'shop'
        },
        {
          _id: 2,
          picture: 'https://www.deco-crystal.com/wp-content/uploads/2021/11/y-tuong-thiet-ke-shop-thoi-trang-nam.jpg',
          keyword: 'shop'
        },
        {
          _id: 3,
          picture: 'https://www.deco-crystal.com/wp-content/uploads/2021/11/y-tuong-thiet-ke-shop-thoi-trang-nam.jpg',
          keyword: 'shop'
        },
        {
          _id: 4,
          picture: 'https://www.deco-crystal.com/wp-content/uploads/2021/11/y-tuong-thiet-ke-shop-thoi-trang-nam.jpg',
          keyword: 'shop'
        },
        {
          _id: 5,
          picture: 'https://www.deco-crystal.com/wp-content/uploads/2021/11/y-tuong-thiet-ke-shop-thoi-trang-nam.jpg',
          keyword: 'shop'
        }
      ]
    }
  },
  head () {
    return {

      title: `Deck ${this.deck.name} | learning languages`
    }
  },

  methods: {
    // showDeck () {
    //   this.$router.push('/decks/' + this.deckId)
    //   //   this.$route.push(`decks/${this.deckId}`)
    //   console.log(this.deckId)
    // },
    closeModal () {
      this.$modal.close({ name: 'CreateCardModal' })
    },
    openModal (name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({ name: 'CreateCardModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.open({ name: 'DeckFormModal', payload: { ...this.deck, id: this.$route.params.id } })
      }
    },
    openModalDelte (name) {
      this.$modal.open({ name })
    }

  }
}
</script>

<style lang="scss">
    section{
        padding-top:3rem ;
        .card{
            padding: 1rem;
            img{
                width: 60%;
            }
        }
        .divide{
            margin: 2rem 0;
        }
        .btn_no,.btn_yes{
          padding: 0.25rem 1rem;
        }
    }
</style>
