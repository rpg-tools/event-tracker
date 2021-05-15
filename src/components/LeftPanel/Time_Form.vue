<template>
  <div class="time_form">
    <div class="line">
      <input type="text" maxlength="4" v-on:keydown="checkInputValue"
             v-on:keyup="checkInputValue" v-on:change="checkInputValue"/>
    </div>
    <div class="line">
      <div>Minute</div>
      <div>Hour</div>
      <div>Day</div>
      <div>Hour</div>
      <div>Year</div>
    </div>
    <div class="line">
      <div>-</div>
      <div>+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Time_Form",
  methods: {
    checkInputValue : function (event) {
      event.target.value = event.target.value.replace(/\D/g,'')
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
}

.time_form > .line > input {
  width: calc(100% - 2px);
  border: solid rgba(200,200,200,0.8) 1px;
  border-radius: 4px;
  font-size: 20px;
  text-align: center;
  padding: 4px 0px;
}

</style>
