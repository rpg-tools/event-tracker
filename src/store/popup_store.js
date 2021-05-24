import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export const popup_store = new Vuex.Store({
    state: {
        is_countdown_popup_open: false
    },
    mutations: {
        open_countdown_popup(state) {
            state.is_countdown_popup_open = true
        },
        close_countdown_popup(state) {
            state.is_countdown_popup_open = false
        }
    },
    getters: {
        is_countdown_popup_open: state => state.is_countdown_popup_open
    }
})
