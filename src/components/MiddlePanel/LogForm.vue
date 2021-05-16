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
      <div class="button_add" v-on:click="add_log" v-if="log_id == ''">Add</div>
      <div class="button_add" v-on:click="update_log" v-if="log_id != ''">Update</div>
      <div class="button_add" v-on:click="delete_log" v-if="log_id != ''">Delete</div>
      <div class="button_add" v-on:click="clear_log" v-if="log_id != ''">Clear</div>
    </div>
  </div>
</template>

<script>
import { v4 as uuid } from 'uuid';

export default {
  name: "LogForm",
  data: function () {
    return {
      categories: [
        "encounter",
        "exploring",
        "fight",
        "quest",
        "note",
        "treasure"
      ],
      is_textarea_error : false,
      is_select_error : false,
      is_title_error : false,
      log_input: "",
      log_category_input: "",
      log_title: "",
      log_id: ""
    }
  },
  created: function() {
    this.$store.subscribe((mutation, state) => {
      this.is_textarea_error = false
      this.is_select_error = false
      this.is_title_error = false
      if (mutation.type === 'select_log') {
        this.log_input = state.selected_log.log;
        this.log_category_input = state.selected_log.type;
        this.log_title = state.selected_log.title;
        this.log_id = state.selected_log.id;
      }
      if (mutation.type === 'update_log' || mutation.type === 'delete_log' || mutation.type === 'unselect_log') {
        this.log_input = "";
        this.log_category_input = "";
        this.log_title = "";
        this.log_id = "";
      }
    });
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
          "id" : uuid()
        })

        this.log_input = ""
        this.log_category_input = ""
        this.log_title = ""
      }
    },
    update_log: function() {
      this.is_textarea_error = this.log_input == ""
      this.is_select_error = this.log_category_input == ""
      this.is_title_error = this.log_title == ""

      if (!this.is_textarea_error && !this.is_select_error && !this.is_title_error) {
        this.$store.commit('update_log', {
          "type": this.log_category_input,
          "title": this.log_title,
          "log" : this.log_input,
          "time" : {
            "minute" : this.$store.getters.selected_log.time.minute,
            "hour" : this.$store.getters.selected_log.time.hour,
            "day" : this.$store.getters.selected_log.time.day,
            "month" : this.$store.getters.selected_log.time.month,
            "year" : this.$store.getters.selected_log.time.year
          },
          "id" : this.log_id
        })

        this.log_input = ""
        this.log_category_input = ""
        this.log_title = ""
      }
    },
    delete_log: function () {
      this.$store.commit('delete_log')
    },
    clear_log: function() {
      this.$store.commit('unselect_log')
    }
  },
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
  height: 124px;
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
  height: 88px;
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
  padding: 4px 16px;
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
