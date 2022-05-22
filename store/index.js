import axios from 'axios'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: []
    },
    mutations: {
      addDeck (state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck (state, editDeck) {
        // eslint-disable-next-line array-callback-return
        const deckIndex = state.decks.findIndex((deck) => {
          // eslint-disable-next-line no-unused-expressions
          return deck.id === editDeck.id
        })

        state.decks[deckIndex] = editDeck
      },
      setDecks (state, decks) {
        state.decks = decks
      }
    },
    actions: {
      nuxtServerInit (vuexContext, context) {
        return axios.get(process.env.baseApiUrl + '/deck.json').then((response) => {
          const decksArr = []
          for (const key in response.data) {
            decksArr.push({ ...response.data[key], id: key })
          }
          vuexContext.commit('setDecks', decksArr)
        }).catch((e) => {
          context.error(e)
        })
      },
      addDeck (vuexContext, deckdata) {
        return axios.post(process.env.baseApiUrl + '/deck.json', deckdata)
          .then((result) => {
            // console.log(result)
            vuexContext.commit('addDeck', { ...deckdata, id: result.data.name })
          }).catch((e) => {
            console.log(e)
          })
      },
      editDeck (vuexContext, deckdata) {
        const deckID = deckdata.id
        delete deckdata.id
        return axios.put(process.env.baseApiUrl + `deck/${deckID}.json`, deckdata)
          .then((result) => {
            console.log(typeof result.data)
            // console.log(deckdata.id)
            vuexContext.commit('editDeck', { ...result.data, id: deckID })
          }).catch((e) => {
            console.log(e)
          })
      },
      setDecks (vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      }
    },
    getters: {
      decks (state) {
        return state.decks
      }
    }
  })
}

export default createStore
