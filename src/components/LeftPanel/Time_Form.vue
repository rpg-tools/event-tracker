<template>
  <div class="time_form">
    <div class="line">
      <input type="text" maxlength="4" v-model="time_input" v-on:keydown="checkInputValue"
             v-on:keyup="checkInputValue" v-on:change="checkInputValue"/>
    </div>
    <div class="line">
      <div class="radio" v-bind:class="{ selected_time_unit: minute_style }"
           v-on:click="selectTimeUnit('minute')">Minute</div>
      <div class="radio" v-bind:class="{ selected_time_unit: hour_style }"
           v-on:click="selectTimeUnit('hour')">Hour</div>
      <div class="radio" v-bind:class="{ selected_time_unit: day_style }"
           v-on:click="selectTimeUnit('day')">Day</div>
      <div class="radio" v-bind:class="{ selected_time_unit: month_style }"
           v-on:click="selectTimeUnit('month')">Month</div>
      <div class="radio" v-bind:class="{ selected_time_unit: year_style }"
           v-on:click="selectTimeUnit('year')">Year</div>
    </div>
    <div class="line">
      <div class="radio minus" v-on:click="remove_time(time_input)">-</div>
      <div class="radio add" v-on:click="add_time(time_input)">+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Time_Form",
  data: function() {
    return {
      minute_style: true,
      hour_style: false,
      day_style: false,
      month_style: false,
      year_style: false,
      time_input: 0
    }
  },
  methods: {
    checkInputValue : function (event) {
      event.target.value = event.target.value.replace(/\D/g,'')
    },
    selectTimeUnit : function(timeUnit) {
      this.minute_style = timeUnit == "minute";
      this.hour_style = timeUnit == "hour";
      this.day_style = timeUnit == "day";
      this.month_style = timeUnit == "month";
      this.year_style = timeUnit == "year";
    },
    remove_time : function(time_to_remove) {
      if (this.minute_style) {
        this.$store.commit('remove_minute', parseInt(time_to_remove))
      }
      if (this.hour_style) {
        this.$store.commit('remove_hour', parseInt(time_to_remove))
      }
      if (this.day_style) {
        this.$store.commit('remove_day', parseInt(time_to_remove))
      }
      if (this.month_style) {
        this.$store.commit('remove_month', parseInt(time_to_remove))
      }
      if (this.year_style) {
        this.$store.commit('remove_year', parseInt(time_to_remove))
      }
    },
    add_time : function(time_to_add) {
      if (this.minute_style) {
        this.$store.commit('add_minute', parseInt(time_to_add))
      }
      if (this.hour_style) {
        this.$store.commit('add_hour', parseInt(time_to_add))
      }
      if (this.day_style) {
        this.$store.commit('add_day', parseInt(time_to_add))
      }
      if (this.month_style) {
        this.$store.commit('add_month', parseInt(time_to_add))
      }
      if (this.year_style) {
        this.$store.commit('add_year', parseInt(time_to_add))
      }
    }
  }
}

</script>

<style scoped>
.time_form {
  width: calc(100% - 16px);
  padding: 16px 8px 16px 8px;
}

.time_form > .line {
  width: calc(100% - 8px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.time_form > .line > input {
  width: calc(100% - 2px);
  border: solid rgba(200,200,200,0.8) 1px;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  padding: 4px 0px;
}

.time_form > .line > .radio {
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
}

.time_form > .line > .selected_time_unit {
  border: solid #2c3e50 2px;
  font-weight: bold;
  background-color: rgba(240,240,240,1);
}

.time_form > .line > .minus {
  border: solid #F7665E 2px;
  padding: 4px 8px !important;
  background-color: rgba(247, 102, 94, 0.5);
  font-size: 28px;
}

.time_form > .line > .add {
  border: solid #42b983 2px;
  padding: 4px 8px !important;
  background-color: rgba(66, 185, 131, 0.5);
  font-size: 28px;
}

</style>
