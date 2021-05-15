<template>
  <div class="clock">
    <div class="background_mask">
      <div class="background_clock" :style="btnStyles"></div>
      <div class="clock_arrow"></div>
      <div class="clock_ball"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayLight_Clock',
  props: {},
  computed: {
    btnStyles() {
      return {
        transform: `rotate(calc(-${this.$store.getters.hour + (this.$store.getters.minute / 60)}deg*360/24))`
      };
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.clock {
  width: 290px;
}
.background_mask {
  height: 150px;
  width: 300px;
  overflow: hidden;
  border-bottom: solid rgba(255,255,255,0.5) 5px;
  position: relative;
}

.clock_arrow{
  position: absolute;
  top: 0px;
  left: 150px;
  width: 0px;
  height: 0px;
  border-top: solid #F7665E 20px;
  border-left: solid transparent 5px;
  border-right: solid transparent 5px;
  z-index:10;
}

.clock_ball{
  position: absolute;
  width: 80px;
  height: 80px;
  background: radial-gradient(#eeeeee 0%, transparent 50%);
  content: 'o';
  left: 110px;
  bottom: -40px;
  border-radius: 50%;
}

.background_clock {
  position: absolute;
  top: 0px;
  left: 0px;
  background:conic-gradient(from 0deg,
  #DABEE3 0%, #DABEE3 calc(4.5%*100/24),
  #B5D4E9 calc(5.5%*100/24),#B7DCF4 calc(11.5%*100/24),
  #FBEBA5 calc(12.5%*100/24), #FDDDAA calc(16.5%*100/24),
  #F6D3AF calc(17.5%*100/24), #F8C3B9 calc(20.5%*100/24),
  #DABEE3 calc(21.5%*100/24));
  width: 290px;
  height: 290px;
  border-radius: 50%;
  border: solid rgba(255,255,255,0.5) 5px;
  z-index:0;
}
</style>
