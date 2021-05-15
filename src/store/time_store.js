import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const time_store = new Vuex.Store({
    state: {
        minute: 0,
        hour: 0,
        day: 0,
        month: 0,
        year: 0
    },
    mutations: {
        change(state, flavor) {
            state.flavor = flavor
        }
    },
    getters: {
        minute: state => state.minute,
        hour: state => state.hour,
        day: state => state.day,
        month: state => state.month,
        year: state => state.year
    }
})
