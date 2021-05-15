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
        add_minute(state, minutes) {
            add_minutes(state, minutes)
        },
        add_hour(state, hours) {
            add_hour(state, hours)
        },
        add_day(state, hours) {
            add_day(state, hours)
        },
        add_month(state, hours) {
            add_month(state, hours)
        },
        add_year(state, hours) {
            add_year(state, hours)
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

function add_minutes(state, minutes) {
    state.minute = state.minute + minutes
    if (state.minute >= 60) {
        let nbr_add_hour = (state.minute - (state.minute % 60)) / 60
        state.minute = state.minute % 60
        add_hour(state, nbr_add_hour)
    }
}

function add_hour(state, hours){
    state.hour = state.hour + hours
    if (state.hour >= 24) {
        let nbr_add_day = (state.hour - (state.hour % 24)) / 24
        state.hour = state.hour % 24
        add_day(state, nbr_add_day)
    }
}

function add_day(state, days) {
    state.day = state.day + days
    if (state.day > 30) {
        let nbr_add_month = (state.day - (state.day % 30)) / 30
        state.day = state.day % 30
        add_month(state, nbr_add_month)
    }
}

function add_month(state, month) {
    state.month = state.month + month
    if (state.month > 12) {
        let nbr_add_year = (state.month - (state.month % 12)) / 12
        state.month = state.month % 12
        add_year(state, nbr_add_year)
    }
}

function add_year(state, year) {
    state.year = state.year + year
}
