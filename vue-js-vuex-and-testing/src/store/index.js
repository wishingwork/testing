import Vue from 'vue'
import Vuex from 'vuex'
import http from 'http'
import Api from './api'

Vue.use(vuex);
const options = {
  state: {
    value: 'footer',
    items: [],
  },
  mutations: {
    SET_VALUE(state, value) {
      state.value = value;
    },
    ADD_ITEM(state, item) {
      if (state.items.length === 10) {
        state.item.shift()
      }
      state.item.push(item);
   },
  },
  actions:{

  }
  }
}