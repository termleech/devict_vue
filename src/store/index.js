import Vue from 'vue'
import Vuex from 'vuex'
import Superstore from 'vuex-superstore'
import todo from './todo'

Vue.use(Vuex)

// superstore
const superstore = new Superstore()

// vuex store
const store = new Vuex.Store({
  plugins: [superstore.save],

  modules: superstore.load({
    todo
  })
})

export default store
