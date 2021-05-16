import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
    key: 'rpg-event-tracker',
    storage: window.localStorage
})

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        minute: 0,
        hour: 0,
        day: 1,
        month: 1,
        year: 1,
        logs: [],
        selected_log: null
    },
    plugins: [vuexPersist.plugin],
    mutations: {
        add_minute(state, minutes) {
            add_minute(state, minutes)
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
        },
        remove_minute(state, minutes) {
            remove_minute(state, minutes)
        },
        remove_hour(state, minutes) {
            remove_hour(state, minutes)
        },
        remove_day(state, minutes) {
            remove_day(state, minutes)
        },
        remove_month(state, minutes) {
            remove_month(state, minutes)
        },
        remove_year(state, minutes) {
            remove_year(state, minutes)
        },
        add_logs(state, log) {
            state.logs.push(log)
        },
        select_log(state, log) {
            state.selected_log = log
        },
        update_log(state, log) {
            state.logs.splice(state.logs.indexOf(state.selected_log), 1, log)
            state.selected_log = null
        },
        delete_log(state) {
            state.logs.splice(state.logs.indexOf(state.selected_log), 1)
            state.selected_log = null
        },
        unselect_log(state) {
            state.selected_log = null
        }
    },
    getters: {
        minute: state => state.minute,
        hour: state => state.hour,
        day: state => state.day,
        month: state => state.month,
        year: state => state.year,
        logs: state => state.logs,
        quests: state => state.logs.filter(log => {
            return log.type == "quest"
        }),
        selected_log: state => state.selected_log
    }
})

/* ----- ADD ----- */
function add_minute(state, minutes) {
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

/* ----- REMOVE ----- */
function remove_minute(state, minutes) {
    if (minutes > state.minute) {
        let delta_minutes = minutes - state.minute
        state.minute = 60 - (delta_minutes%60)
        remove_hour(state, 1 + ((delta_minutes-(delta_minutes%60)) / 60))
    } else {
        state.minute = state.minute - minutes
    }
}

function remove_hour(state, hours){
    if (hours > state.hour) {
        let delta_hours = hours - state.hour
        state.hour = 24 - (delta_hours%24)
        remove_day(state, 1 + ((delta_hours-(delta_hours%24)) / 24))
    } else {
        state.hour = state.hour - hours
    }
}

function remove_day(state, days) {
    if (days >= state.day) {
        let delta_days = days - state.day
        state.day = 30 - (delta_days%30)
        remove_month(state, 1 + ((delta_days-(delta_days%30)) / 30))
    } else {
        state.day = state.day - days
    }
}

function remove_month(state, month) {
    if (month >= state.month) {
        let delta_months = month - state.month
        state.month = 12 - (delta_months%12)
        remove_year(state, 1 + ((delta_months-(delta_months%12)) / 12))
    } else {
        state.month = state.month - month
    }

}

function remove_year(state, year) {
    state.year = state.year - year
}
