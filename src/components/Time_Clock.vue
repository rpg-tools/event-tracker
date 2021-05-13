<template>
  <div class="time">
    <div class="timer">
      {{hour}} : 00
    </div>
    <div class="date">
      17 / 20 / X777
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time_Clock',
  components: {},
  props: {
    hour: Number
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
