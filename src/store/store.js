import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import {NBR_DAYS_IN_MONTH, NBR_HOURS_IN_DAY, NBR_MINUTES_IN_HOUR, NBR_MONTHS_IN_YEAR} from "@/constants/time_constant";

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
        selected_log: null,
        selected_quest: null,
        quests: [],
        session: 1,
        selected_sessions: []
    },
    plugins: [vuexPersist.plugin],
    mutations: {
        /* --- TIME MUTATIONS --- */
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
        subtract_minute(state, minutes) {
            subtract_minute(state, minutes)
        },
        subtract_hour(state, minutes) {
            subtract_hour(state, minutes)
        },
        subtract_day(state, minutes) {
            subtract_day(state, minutes)
        },
        subtract_month(state, minutes) {
            subtract_month(state, minutes)
        },
        subtract_year(state, minutes) {
            subtract_year(state, minutes)
        },

        /* --- LOGS MUTATIONS --- */
        add_logs(state, log) {
            state.logs.push(log)

            // Sort logs to be sure that the new log in inserted at the right place.
            state.logs = state.logs.sort((a, b) => {
                if (a.time.year == b.time.year) {
                    if (a.time.month == b.time.month) {
                        if (a.time.day == b.time.day) {
                            if (a.time.hour == b.time.hour) {
                                return a.time.minute - b.time.minute
                            } else {
                                return a.time.hour - b.time.hour
                            }
                        } else {
                            return a.time.day - b.time.day
                        }
                    } else {
                        return a.time.month -  b.time.month
                    }
                } else {
                    return a.time.year - b.time.year
                }
            })

            state.quests = state.logs.filter(log => {
                return log.type == "quest" && log.end != true
            })
        },
        select_log(state, log) {
            state.selected_log = log
        },
        update_log(state, log) {
            state.logs.splice(state.logs.indexOf(state.selected_log), 1, log)
            state.selected_log = null

            state.quests = state.logs.filter(log => {
                return log.type == "quest" && log.end != true
            })
        },
        delete_log(state) {
            state.logs.splice(state.logs.indexOf(state.selected_log), 1)
            state.selected_log = null

            state.quests = state.logs.filter(log => {
                return log.type == "quest" && log.end != true
            })
        },
        unselect_log(state) {
            state.selected_log = null
        },

        /* --- QUEST MUTATION --- */
        select_quest(state, quest) {
            if (state.selected_quest != null && state.selected_quest.id == quest.id) {
                state.selected_quest = null
            } else {
                state.selected_quest = quest
            }
        },

        /* --- SESSION MUTATION --- */
        go_to_next_session(state) {
            state.session = state.session + 1
            state.selected_sessions.push(parseInt(state.session))
        },
        update_selected_sessions(state, session) {
            state.selected_sessions = session
        }

    },
    getters: {
        minute: state => state.minute,
        hour: state => state.hour,
        day: state => state.day,
        month: state => state.month,
        year: state => state.year,
        logs: state => state.logs.filter(log => {
            return (state.selected_quest == null && state.selected_sessions.indexOf(log.session) > -1)
                || (state.selected_quest != null && (log.id == state.selected_quest.id || log.quest == state.selected_quest.id))
        }),
        quests: state => state.quests,
        questname: (state) => {
            return function (id) {
                var quests_with_id = state.quests.filter(log => log.id == id)
                if (quests_with_id.length > 0) {
                    return quests_with_id[0].title
                } else {
                    return ""
                }
            };
        },
        selected_log: state => state.selected_log,
        session: state => state.session,
        selected_sessions: state => state.selected_sessions
    }
})

/* ----- ADD ----- */
/**
 * Add the number of minutes given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param minutes : int - Number of minutes to add.
 */
function add_minute(state, minutes) {
    state.minute = state.minute + minutes
    if (state.minute >= NBR_MINUTES_IN_HOUR) {
        let nbr_add_hour = (state.minute - (state.minute % NBR_MINUTES_IN_HOUR)) / NBR_MINUTES_IN_HOUR
        state.minute = state.minute % NBR_MINUTES_IN_HOUR
        add_hour(state, nbr_add_hour)
    }
}

/**
 * Add the number of hours given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param hours : int - Number of hours to add.
 */
function add_hour(state, hours){
    state.hour = state.hour + hours
    if (state.hour >= NBR_HOURS_IN_DAY) {
        let nbr_add_day = (state.hour - (state.hour % NBR_HOURS_IN_DAY)) / NBR_HOURS_IN_DAY
        state.hour = state.hour % NBR_HOURS_IN_DAY
        add_day(state, nbr_add_day)
    }
}

/**
 * Add the number of days given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param days : int - Number of days to add.
 */
function add_day(state, days) {
    state.day = state.day + days
    if (state.day > NBR_DAYS_IN_MONTH) {
        let nbr_add_month = (state.day - (state.day % NBR_DAYS_IN_MONTH)) / NBR_DAYS_IN_MONTH
        state.day = state.day % NBR_DAYS_IN_MONTH
        add_month(state, nbr_add_month)
    }
}

/**
 * Add the number of months given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param months : int - Number of months to add.
 */
function add_month(state, months) {
    state.month = state.month + months
    if (state.month > NBR_MONTHS_IN_YEAR) {
        let nbr_add_year = (state.month - (state.month % NBR_MONTHS_IN_YEAR)) / NBR_MONTHS_IN_YEAR
        state.month = state.month % NBR_MONTHS_IN_YEAR
        add_year(state, nbr_add_year)
    }
}

/**
 * Add the number of years given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param years : int - Number of years to add.
 */
function add_year(state, years) {
    state.year = state.year + years
}

/* ----- REMOVE ----- */
/**
 * Subtract the number of minutes given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param minutes : int - Number of minutes to subtract.
 */
function subtract_minute(state, minutes) {
    if (minutes > state.minute) {
        let delta_minutes = minutes - state.minute
        state.minute = NBR_MINUTES_IN_HOUR - (delta_minutes%NBR_MINUTES_IN_HOUR)
        subtract_hour(state, 1 + ((delta_minutes-(delta_minutes%NBR_MINUTES_IN_HOUR)) / NBR_MINUTES_IN_HOUR))
    } else {
        state.minute = state.minute - minutes
    }
}

/**
 * Subtract the number of hours given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param hours : int - Number of hours to subtract.
 */
function subtract_hour(state, hours){
    if (hours > state.hour) {
        let delta_hours = hours - state.hour
        state.hour = NBR_HOURS_IN_DAY - (delta_hours%NBR_HOURS_IN_DAY)
        subtract_day(state, 1 + ((delta_hours-(delta_hours%NBR_HOURS_IN_DAY)) / NBR_HOURS_IN_DAY))
    } else {
        state.hour = state.hour - hours
    }
}

/**
 * Subtract the number of days given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param days : int - Number of days to subtract.
 */
function subtract_day(state, days) {
    if (days >= state.day) {
        let delta_days = days - state.day
        state.day = NBR_DAYS_IN_MONTH - (delta_days%NBR_DAYS_IN_MONTH)
        subtract_month(state, 1 + ((delta_days-(delta_days%NBR_DAYS_IN_MONTH)) / NBR_DAYS_IN_MONTH))
    } else {
        state.day = state.day - days
    }
}

/**
 * Subtract the number of months given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param months : int - Number of months to subtract.
 */
function subtract_month(state, months) {
    if (months >= state.month) {
        let delta_months = months - state.month
        state.month = NBR_MONTHS_IN_YEAR - (delta_months%NBR_MONTHS_IN_YEAR)
        subtract_year(state, 1 + ((delta_months-(delta_months%NBR_MONTHS_IN_YEAR)) / NBR_MONTHS_IN_YEAR))
    } else {
        state.month = state.month - months
    }

}

/**
 * Subtract the number of years given in parameters to the stored time.
 * @param state - Current state of the store.
 * @param years : int - Number of years to subtract.
 */
function subtract_year(state, years) {
    state.year = state.year - years
}
