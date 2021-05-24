<template>
  <div class="countdown_container">
    <div class="title">
      Countdowns
    </div>
    <div class="button" v-on:click="open_popup()">Add countdown</div>
    <div class="countdown_list">

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
