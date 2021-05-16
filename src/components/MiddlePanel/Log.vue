<template>
  <div class="log">
    <div class="token_container">
      <div class="token" v-bind:class="{ encounter_token: log.type == 'encounter', exploring_token: log.type == 'exploring',
          fight_token: log.type == 'fight' }"></div>
    </div>
    <div  class="content" v-bind:class="{ encounter: log.type == 'encounter', exploring: log.type == 'exploring',
          fight: log.type == 'fight' }">
      <div class="title">
        {{log.title}}
        <span class="description">
          {{log.type}} - {{log.time.day}}/{{log.time.month}}/X{{log.time.year}} -
          {{getNumberDoubleDigit(log.time.hour)}}:{{getNumberDoubleDigit(log.time.minute)}}
        </span>
      </div>
      <div class="message">{{log.log}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Log",
  props: {
    log: Object
  },
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

<style scoped>
.log {
  position: relative;
  color: #000;
  text-shadow: none;
  margin-top: 8px;
}

.token_container {
  position: absolute;
  top: 0px;
  left: 25px;
  height: 100%;
  display: table-cell;

}

.token {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.content {
  width : calc(100% - 100px);
  border-radius: 8px;
  margin-left: 50px;
  padding: 8px 8px 8px 32px;
}

.title {
  padding-bottom: 4px;
  padding-left: 8px;
}

.message {
  border-top : solid black 2px;
  padding-top: 4px;
  padding-left: 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.8em;
}

.description {
  font-weight: 300;
  font-size: 12px;
  padding-left: 20px;
  text-transform: uppercase;
}

/* ----------------*/
/* FIGHT */
.fight {
  border: solid #b71c1c 2px;
  background-color: rgba(255,205,210, 0.5);
}

.fight > .message {
  border-top: solid #b71c1c 2px;
}

.fight_token {
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/lorc/fist.svg");
  border: solid #b71c1c 2px;
  background-color: rgba(183,28,28, 0.75);
}

/* ENCOUNTER */
.encounter {
  border: solid #004d40 2px;
  background-color: rgba(0,77,64, 0.2);
}

.encounter > .message {
  border-top: solid #004d40 2px;
}

.encounter_token {
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/delapouite/shaking-hands.svg");
  border: solid #004d40 2px;
  background-color: #407a70;
}

/* EXPLORING */
.exploring {
  border: solid #01579b 2px;
  background-color: rgba(1,87,155, 0.2);
}

.exploring > .message {
  border-top: solid #01579b 2px;
}

.exploring_token {
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/delapouite/walk.svg");
  border: solid #01579b 2px;
  background-color: #4181b4; /*rgba(1,87,155, 0.75);*/
}
</style>
