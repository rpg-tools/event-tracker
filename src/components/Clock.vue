<template>
  <div>
    <DayLight_Clock :hour="hour"></DayLight_Clock>
    <Time_Clock :hour="hour" :minute="minute"></Time_Clock>
  </div>
</template>

<script>
import DayLight_Clock from "@/components/DayLight_Clock";
import Time_Clock from "@/components/Time_Clock";
export default {
  name: 'Clock',
  components: {Time_Clock, DayLight_Clock},
  props: {
    hour: Number,
    minute: Number
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
