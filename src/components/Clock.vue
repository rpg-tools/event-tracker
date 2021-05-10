<template>
  <div class="clock">
    <div class="background_mask">
      <div class="background_clock" :style="btnStyles" style="transform: rotate(calc(-${ hour }deg*360/24))"></div>
      <div class="clock_arrow"></div>
      <div class="clock_ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  props: {
    hour: Number
  },
  computed: {
    btnStyles() {
      return {
        transform: `rotate(calc(-${this.hour}deg*360/24))`
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock {
  width: 200px;
  height: 200px;
}
.background_mask {
  height: 100px;
  width: 200px;
  overflow: hidden;
  border-bottom: solid black 2px;
  position: relative;
}

.clock_arrow{
  position: absolute;
  top: 0px;
  left: 95px;
  width: 0px;
  height: 0px;
  border-top: solid red 20px;
  border-left: solid transparent 5px;
  border-right: solid transparent 5px;
  z-index:10;
}

.clock_ball{
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #000;
  content: 'o';
  left: 88px;
  bottom: -10px;
  border-radius: 50%;
}

.background_clock {
  position: absolute;
  top: 0px;
  left: 0px;
  background:conic-gradient(from 0deg,
  #524BA8 0%, #524BA8 calc(5%*100/24),
  #FEE3AA calc(5%*100/24),#FEE3AA calc(12%*100/24),
  #88E4FF calc(12%*100/24), #88E4FF calc(17%*100/24),
  #DA6077 calc(17%*100/24), #DA6077 calc(21%*100/24),
  #524BA8 calc(21%*100/24));
  width: 196px;
  height: 196px;
  border-radius: 50%;
  border: solid black 2px;
  z-index:0;
}
</style>
