<template>
  <div class="time">
    <div class="timer">
      {{getNumberDoubleDigit($store.getters.hour)}} : {{ getNumberDoubleDigit($store.getters.minute) }}
    </div>
    <div class="date">
      {{ $store.getters.day }} / {{ $store.getters.month }} / X{{ $store.getters.year }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time_Clock',
  components: {},
  props: {},
  methods : {
    getNumberDoubleDigit: function(number) {
      if (number < 10) {
        return "0" + number
      }
      return number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer {
  width: 100%;
  text-align: center;
  padding: 8px 0px 0px 0px;
  color: #eee;
  font-size: 40px;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 100;
  text-shadow: 0px 0px 4px #888;
  background-color: rgba(50, 50, 50, 0.1)
}

.date {
  width: 100%;
  text-align: center;
  padding: 4px 0px;
  color: rgba(230,230,230,0.7);
  font-size: 20px;
  letter-spacing: 2px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-shadow: 0px 0px 4px #888;
  background-color: rgba(50, 50, 50, 0.1)
}
</style>
