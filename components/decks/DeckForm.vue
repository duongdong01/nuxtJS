<template>
  <form @submit.prevent="onSave">
    <div class="form_group">
      <label for="Name">Name:</label>
      <input
        id="Name"
        v-model="editedDeck.name"
        type="text"
        name="Name"
        class="form_control"
        placeholder="please enter name deck"
      >
    </div>
    <div class="form_group">
      <label for="Description">Description:</label>
      <textarea id="Description" v-model="editedDeck.description" name="Description" class="form_control" placeholder="please enter Description" />
    </div>
    <div class="form_group">
      <label for="">Thumbnail:</label>
      <input v-model="editedDeck.thumbnail" type="text" class="form_control" placeholder="https://example.com/foo.png">
      <div class="preview" />
    </div>
    <div class="form_group d_flex justify_content_end">
      <button class="btn btn_danger" type="button" @click.prevent="closeModal">
        Close
      </button>
      <button type="submit" class="btn btn_success ml_1" @click.prevent="onSave">
        {{ editedDeck.id ? 'Edit' : 'Create' }}
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    deck: {
      type: Object,
      require: false,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: () => ({
        name: '',
        description: '',
        thumbnail: ''
      })
    }
  },
  data () {
    return {
      editedDeck: this.deck
        ? { ...this.deck }
        : {
            name: '0',
            description: '0',
            thumbnail: '0'
          }
    }
  },
  methods: {
    closeModal () {
      this.$modal.close({ name: 'DeckFormModal' })
    },
    onSave () {
      this.$emit('submit', this.editedDeck)
    }
  }
}
</script>
