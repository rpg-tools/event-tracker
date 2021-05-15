<template>
  <div class="logbook">
    <div v-for="log in $store.getters.logs" :key="log.title" class="log"
         v-bind:class="{ encounter: log.type == 'encounter', exploring: log.type == 'exploring',
          fight: log.type == 'fight' }">
      <div class="title">
        {{log.title}}
        <span class="description">{{log.type}} - {{log.time.day}}/{{log.time.month}}/X{{log.time.year}} - {{log.time.hour}}:{{log.time.minute}}</span>
      </div>
      <div class="details">{{log.log}}</div>
    </div>
  </div>
</template>

<script>
export default {
name: "Logbook"
}
</script>

<style scoped>
.logbook {
  width: 100%;
  height: calc(100% - 160px);
  overflow-x: hidden;
  overflow-y: scroll;
  font-family: 'Roboto', sans-serif;
}

.log{
  width: calc(100% - 28px);
  background-color: rgba(255,255,255,0.8);
  color: #111;
  margin-bottom: 8px;
  border-radius: 4px;
  padding: 4px;
}

.title {
  width: calc(100% - 8px);
  font-weight: bold;
}
.details {
  padding: 4px;
}
.description {
  font-weight: 300;
  font-size: 12px;
  padding-left: 4px;
  text-transform: uppercase;
}

.encounter {
  border: solid #2c3e50 2px;
}
.encounter > .title {
  border-bottom: solid #2c3e50 1px;
  margin-bottom: 4px;
  padding-left: 4px;
}
.encounter > .title > .description {
  color: #2c3e50;
}

.exploring {
  border: solid #42b983 2px;
}
.exploring > .title {
  border-bottom: solid #42b983 1px;
  margin-bottom: 4px;
  padding-left: 4px;
}
.exploring > .title > .description {
  color: #42b983;
}

.fight {
  border: solid #F7665E 2px;
}
.fight > .title {
  border-bottom: solid #F7665E 1px;
  margin-bottom: 4px;
  padding-left: 4px;
}
.fight > .title > .description {
  color: #F7665E;
}



</style>
