<template>
  <div class="countdown_popup_container">
    <div class="input_line">
      <div class="input_title">Title</div>
      <input v-model="title" type="text"/>
    </div>
    <div class="input_line">
      <div class="input_title">Years</div>
      <input v-model="years" type="text" maxlength="4"
             v-on:keydown="checkInputValue" v-on:keyup="checkInputValue" v-on:change="checkInputValue" v-on:blur="checkInputValue"/>
    </div>
    <div class="input_line">
      <div class="input_title">Months</div>
      <input v-model="months" type="text" maxlength="4"
             v-on:keydown="checkInputValue" v-on:keyup="checkInputValue" v-on:change="checkInputValue" v-on:blur="checkInputValue"/>
    </div>
    <div class="input_line">
      <div class="input_title">Days</div>
      <input v-model="days" type="text" maxlength="4"
             v-on:keydown="checkInputValue" v-on:keyup="checkInputValue" v-on:change="checkInputValue" v-on:blur="checkInputValue"/>
    </div>
    <div class="input_line">
      <div class="input_title">Hours</div>
      <input v-model="hours" type="text" maxlength="4"
             v-on:keydown="checkInputValue" v-on:keyup="checkInputValue" v-on:change="checkInputValue" v-on:blur="checkInputValue"/>
    </div>
    <div class="input_line">
      <div class="input_title">Minutes</div>
      <input v-model="minutes" type="text" maxlength="4"
             v-on:keydown="checkInputValue" v-on:keyup="checkInputValue" v-on:change="checkInputValue" v-on:blur="checkInputValue"/>
    </div>
    <div class="input_line" style="justify-content: center">
      <div class="button minus" v-on:click="closePopup">Cancel</div>
      <div class="button add" v-on:click="createCountdown" v-if="id == ''">Create</div>
      <div class="button add" v-on:click="updateCountdown" v-if="id != ''">Update</div>
      <div class="button minus" v-on:click="deleteCountdown" v-if="id != ''">Delete</div>
    </div>
  </div>
</template>

<script>
import {popup_store} from "@/store/popup_store";
import { v4 as uuid } from 'uuid';

export default {
  name: "CountdownPopup",
  data: function () {
    return {
      id: "",
      title: "",
      years : "0",
      months : "0",
      days : "0",
      hours : "0",
      minutes : "0"
    }
  },
  created: function() {
    this.title = this.$store.getters.selected_countdown.title
    this.years = this.$store.getters.selected_countdown.year
    this.months = this.$store.getters.selected_countdown.month
    this.days = this.$store.getters.selected_countdown.day
    this.hours = this.$store.getters.selected_countdown.hour
    this.minutes = this.$store.getters.selected_countdown.minute
    this.id = this.$store.getters.selected_countdown.id
  },
  methods: {
    checkInputValue : function (event) {
      event.target.value = event.target.value.replace(/\D/g,'')
    },
    closePopup : function () {
      popup_store.commit('close_countdown_popup') // TODO : Constante
    },
    createCountdown : function () {
      if (this.title != '') {
        this.$store.commit('add_countdown', { // TODO : Constante
          "id" : uuid(),
          "title": this.title,
          "year": parseInt(this.years),
          "month": parseInt(this.months),
          "day": parseInt(this.days),
          "hour": parseInt(this.hours),
          "minute": parseInt(this.minutes)
        })
        popup_store.commit('close_countdown_popup') // TODO : Constante

        this.title = ""
        this.years = "0"
        this.months = "0"
        this.days = "0"
        this.hours = "0"
        this.minutes = "0"
        this.id = ""
      }
    },
    updateCountdown : function () {
      if (this.title != '') {
        this.$store.commit('update_countdown', { // TODO : Constante
          "id" : this.id,
          "title": this.title,
          "year": parseInt(this.years),
          "month": parseInt(this.months),
          "day": parseInt(this.days),
          "hour": parseInt(this.hours),
          "minute": parseInt(this.minutes)
        })
        popup_store.commit('close_countdown_popup') // TODO : Constante

        this.title = ""
        this.years = "0"
        this.months = "0"
        this.days = "0"
        this.hours = "0"
        this.minutes = "0"
        this.id = ""
      }
    },
    deleteCountdown : function () {
      if (confirm("Are you sure to delete this countdown?")) { // TODO : Constante
        if (this.title != '') {
          this.$store.commit('delete_countdown')
          popup_store.commit('close_countdown_popup') // TODO : Constante

          this.title = ""
          this.years = "0"
          this.months = "0"
          this.days = "0"
          this.hours = "0"
          this.minutes = "0"
          this.id = ""
        }
      }
    }
  }
}
</script>

<style scoped>
.countdown_popup_container {
  width: 584px;
  height: 224px;
  transform: translate(calc(50vw - 300px), calc(50vh - 120px));
  background-color: #eeeeee;
  padding: 8px;
  border-radius: 4px;
}

.input_line {
  display: flex;
  margin: 4px 8px;
}

.input_line > .input_title {
  padding: 4px;
  width: 30%;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8em;
}

.input_line > input {
  width: 70%;
  border: solid rgba(150,150,150,0.5) 1px;
  padding: 4px;
}

.button {
  text-transform: uppercase;
  font-size: 12px;
  min-width: 60px;
  background-color: rgba(240,240,240,0.6);
  border: solid rgba(240,240,240,0.6) 2px;
  font-family: 'Roboto', sans-serif;
  margin: 4px 4px;
  padding: 8px 16px;
  color: #2c3e50;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 2px 2px 4px rgba(20,20,20,0.4);
}

.minus {
  border: solid #F7665E 2px;
  padding: 4px 8px !important;
  background-color: rgba(247, 102, 94, 0.5);
}

.add {
  border: solid #42b983 2px;
  padding: 4px 8px !important;
  background-color: rgba(66, 185, 131, 0.5);
}
</style>
