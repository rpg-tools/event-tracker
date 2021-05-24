<template>
  <div class="countdown_container">
    <div class="title">
      Countdowns
    </div>
    <div class="button" v-on:click="open_popup()">Add countdown</div>
    <div class="countdown_list">
      <div v-for="countdown in $store.getters.countdowns" :key="countdown.id" :quest="countdown" class="countdown">
        <div class="countdown_title">{{countdown.title}}</div>
        <div class="time_until">{{defineLabels(countdown)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {popup_store} from "@/store/popup_store";

export default {
  name: "Countdown",
  methods: {
    open_popup() {
      popup_store.commit('open_countdown_popup') // TODO : Constantes
    },
    defineLabels(countdown) {
      let isTextAdded = false
      let result = ''
      if (parseInt(countdown.years) != 0) {
        isTextAdded = true
        if (parseInt(countdown.years) >= 0) {
          result = result + "Y-" + countdown.years
        } else {
          result = result + "Y+" + countdown.years
        }
      }
      if (isTextAdded) {
        result = result + " "
      }
      if (parseInt(countdown.months) != 0) {
        isTextAdded = true
        if (parseInt(countdown.months) >= 0) {
          result = result + "M-" + countdown.months
        } else {
          result = result + "M+" + countdown.months
        }
      }
      if (isTextAdded) {
        result = result + " "
      }
      if (parseInt(countdown.days) != 0) {
        isTextAdded = true
        if (parseInt(countdown.days) >= 0) {
          result = result + "D-" + countdown.days
        } else {
          result = result + "D+" + countdown.days
        }
      }
      if (isTextAdded) {
        result = result + " "
      }
      if (parseInt(countdown.hours) != 0) {
        isTextAdded = true
        if (parseInt(countdown.hours) >= 0) {
          result = result + "H-" + countdown.hours
        } else {
          result = result + "H+" + countdown.hours
        }
      }
      if (isTextAdded) {
        result = result + " "
      }
      if (parseInt(countdown.minutes) > 0 || (parseInt(countdown.minutes) == 0 && !isTextAdded)) {
        result = result + "m-" + countdown.minutes
      } else if (parseInt(countdown.minutes) < 0){
        result = result + "m+" + countdown.minutes
      }

      return result
    }
  }
}
</script>

<style scoped>
.countdown_container {
  width: 100%;
  border-top : solid rgba(0,0,0,0.2) 1px;
}

.title {
   margin-top: 8px;
   width: 100%;
   text-align: center;
   font-family: 'Roboto', sans-serif;
   color: #ffffff;
   background-color: #b71c1c;
   padding-top: 4px;
   padding-bottom: 4px;
   border-radius: 4px;
 }

.countdown_list {
  height: 300px;
  width: 100%;
  margin-bottom: 8px;
  overflow-y: auto;
  overflow-x: hidden;
  text-align: center;
}

.countdown {
  background-color: rgba(80,80,80,0.2);
  border-radius: 4px;
  padding: 2px;
  margin-top: 4px;
}

.countdown_title{
  color: #000000;
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  font-size: 14px;
}
.time_until {
  font-weight: bold;
  color: #b71c1c;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
}

.button {
  text-transform: uppercase;
  font-size: 12px;
  min-width: 60px;
  background-color: rgba(240,240,240,0.6);
  border: solid rgba(240,240,240,0.6) 2px;
  font-family: 'Roboto', sans-serif;
  margin: 8px 4px;
  padding: 4px 16px;
  color: #2c3e50;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(20,20,20,0.4);
}
</style>
