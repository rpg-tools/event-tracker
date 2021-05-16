<template>
  <div class="log_form">
    <div class="input">
      <input v-model="log_title"  v-bind:class="{ error: is_title_error }" />
      <textarea v-model="log_input" v-bind:class="{ error: is_textarea_error }"></textarea>
    </div>
    <div class="options">
      <select v-model="log_category_input"  v-bind:class="{ error: is_select_error }">
        <option v-for="category in categories" :key="category">{{category}}</option>
      </select>
      <div class="button_add" v-on:click="add_log">Add</div>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
  name: "LogForm",
  data: function () {
    return {
      categories: [
        "encounter",
        "exploring",
        "fight"
      ],
      is_textarea_error : false,
      is_select_error : false,
      is_title_error : false,
      log_input: "",
      log_category_input: "",
      log_title: ""
    }
  },
  methods: {
    add_log: function() {
      this.is_textarea_error = this.log_input == ""
      this.is_select_error = this.log_category_input == ""
      this.is_title_error = this.log_title == ""

      if (!this.is_textarea_error && !this.is_select_error && !this.is_title_error) {
        this.$store.commit('add_logs', {
          "type": this.log_category_input,
          "title": this.log_title,
          "log" : this.log_input,
          "time" : {
            "minute" : this.$store.getters.minute,
            "hour" : this.$store.getters.hour,
            "day" : this.$store.getters.day,
            "month" : this.$store.getters.month,
            "year" : this.$store.getters.year
          },
          "id" : uuidv4()
        })

        this.log_input = ""
        this.log_category_input = ""
        this.log_title = ""
      }
    }
  }
}
</script>

<style scoped>
.input{
  width: calc(100% - 16px);
  height: 84px;
}

.log_form {
  margin-top: 8px;
  width: calc(100% - 16px);
  background-color: rgba(165,193,214,0.5);
  border-radius: 8px;
  padding: 8px;
  display: flex;
}

input {
  width: calc(100% - 16px);
  margin-bottom: 8px;
}

textarea {
  resize: none;
  width: calc(100% - 16px);
  margin-right: 8px;
  border: solid rgba(200,200,200,0.8) 1px;
  border-radius: 4px;
  height: 48px;
}

.options {
  width: 150px;
}

.options > select {
  width: 100%;
  font-family: 'Roboto', sans-serif;
  border-radius: 4px;
  border: solid rgba(200,200,200,0.8) 1px;
  border-radius: 4px;
}

.options > .button_add {
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

.error {
  border: solid red 2px !important;
}

</style>
