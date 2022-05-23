import axios from 'axios'

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      decks: [],
      token: null
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
      },
      setToken (state, token) {
        state.token = token
      },
      clearToken (state) {
        state.token = null
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
      authenticateUser (vuexContext, credendials) {
        return new Promise((resolve, reject) => {
          const authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.fbApiKey}`
          if (!credendials.isLogin) {
            // eslint-disable-next-line no-const-assign
            authUrlApi = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`
          }
          axios.post(authUrlApi, {
            email: credendials.email,
            password: credendials.password,
            returnSecureToken: true
          }).then((result) => {
            console.log(result)
            vuexContext.commit('setToken', result.data.idToken)
            // luu token để token k bị mất kho refesh
            localStorage.setItem('token', result.data.idToken)
            localStorage.setItem('tokenExpiration', new Date().getTime() + result.data.expiresIn * 1000)
            vuexContext.dispatch('setLogoutTimer', result.data.expiresIn * 1000)
            resolve({ success: true })
          }).catch(error => console.log(error.response))
        })
      },
      addDeck (vuexContext, deckdata) {
        return axios.post(process.env.baseApiUrl + '/deck.json?auth=' + vuexContext.state.token, deckdata)
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
        return axios.put(process.env.baseApiUrl + '/deck/' + deckID + '.json?auth=' + vuexContext.state.token, deckdata)
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
      },
      setLogoutTimer (vuexContext, duratoken) {
        setTimeout(() => {
          vuexContext.commit('clearToken')
        }, duratoken)
      }
    },
    initAuth (vuexContext) {
      const token = localStorage.getItem('token')
      const tokenExpiration = localStorage.getItem('tokenExpiration')

      if (new Date().getTime() > tokenExpiration || !token) {
        return false
      }
      vuexContext.commit('setToken', token)
    },
    getters: {
      decks (state) {
        return state.decks
      },
      isAuthenticated (state) {
        return state.token != null
      }
    }
  })
}

export default createStore
