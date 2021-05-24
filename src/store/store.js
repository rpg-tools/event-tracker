import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'
import {add_minute, add_day, add_hour, add_month, add_year, subtract_day, subtract_hour, subtract_minute,
    subtract_month, subtract_year} from "@/utils/time_utils";
import {update_countdown} from "@/utils/countdown_utils";
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
        selected_sessions: [],
        countdowns: [],
        selected_countdown : null
    },
    plugins: [vuexPersist.plugin],
    mutations: {
        /* --- TIME MUTATIONS --- */
        add_minute(state, minutes) {
            state = add_minute(state, minutes)
            state.countdowns.map(cd => update_countdown(cd, minutes))
            state.minute = state.minute + 0
        },
        add_hour(state, hours) {
            state = add_hour(state, hours)
            state.countdowns.map(cd => update_countdown(cd, hours * NBR_MINUTES_IN_HOUR))
            state.hour = state.hour + 0
        },
        add_day(state, days) {
            state = add_day(state, days)
            state.countdowns.map(cd => update_countdown(cd, days * NBR_HOURS_IN_DAY * NBR_MINUTES_IN_HOUR))
            state.day = state.day + 0
        },
        add_month(state, months) {
            state = add_month(state, months)
            state.countdowns.map(cd => update_countdown(cd, months * NBR_DAYS_IN_MONTH * NBR_HOURS_IN_DAY * NBR_MINUTES_IN_HOUR))
            state.month = state.month + 0
        },
        add_year(state, years) {
            state = add_year(state, years)
            state.countdowns.map(cd => update_countdown(cd, years * NBR_MONTHS_IN_YEAR * NBR_DAYS_IN_MONTH * NBR_HOURS_IN_DAY * NBR_MINUTES_IN_HOUR))
            state.year = state.year + 0
        },
        subtract_minute(state, minutes) {
            subtract_minute(state, minutes)
            state.countdowns.map(cd => update_countdown(cd, minutes * -1))
            state.minute = state.minute + 0
        },
        subtract_hour(state, hours) {
            subtract_hour(state, hours)
            state.countdowns.map(cd => update_countdown(cd, hours * NBR_MINUTES_IN_HOUR * -1))
            state.hour = state.hour + 0
        },
        subtract_day(state, days) {
            subtract_day(state, days)
            state.countdowns.map(cd => update_countdown(cd, days * NBR_HOURS_IN_DAY * NBR_MINUTES_IN_HOUR * -1))
            state.day = state.day + 0
        },
        subtract_month(state, months) {
            subtract_month(state, months)
            state.countdowns.map(cd => update_countdown(cd, months * NBR_DAYS_IN_MONTH * NBR_HOURS_IN_DAY * NBR_MINUTES_IN_HOUR * +1))
            state.month = state.month + 0
        },
        subtract_year(state, years) {
            subtract_year(state, years)
            state.countdowns.map(cd => update_countdown(cd, years * NBR_MONTHS_IN_YEAR * NBR_DAYS_IN_MONTH * NBR_HOURS_IN_DAY * NBR_MINUTES_IN_HOUR * -1))
            state.year = state.year + 0
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
        },

        /* --- COUNTDOWN MUTATION --- */
        add_countdown(state, countdown) {
            state.countdowns.push(countdown)
        },
        update_countdown(state, countdown) {
            state.countdowns.splice(state.countdowns.indexOf(state.selected_countdown), 1, countdown)
            state.selected_countdown = null
        },
        delete_countdown(state) {
            state.countdowns.splice(state.countdowns.indexOf(state.selected_countdown), 1)
            state.selected_countdown = null
        },
        select_countdown(state, countdown) {
            state.selected_countdown = countdown
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
        selected_sessions: state => state.selected_sessions,
        countdowns: state => state.countdowns.sort((a, b) => {
            if (a.year == b.year) {
                if (a.month == b.month) {
                    if (a.day == b.day) {
                        if (a.hour == b.hour) {
                            return a.minute - b.minute
                        } else {
                            return a.hour - b.hour
                        }
                    } else {
                        return a.day - b.day
                    }
                } else {
                    return a.month - b.month
                }
            } else {
                return a.year - b.year
            }
        }),
        selected_countdown: state => state.selected_countdown
    }
})
