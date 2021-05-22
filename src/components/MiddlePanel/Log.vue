<template>
  <div class="log" v-on:click="select_log(log)">
    <div class="token_container">
      <div class="token" v-bind:class="{ encounter_token: log.type == 'encounter', exploring_token: log.type == 'exploring',
          fight_token: log.type == 'fight', note_token: log.type == 'note', quest_token: log.type == 'quest',
          treasure_token: log.type == 'treasure' }"></div>
    </div>
    <div  class="content" v-bind:class="{ encounter: log.type == 'encounter', exploring: log.type == 'exploring',
          fight: log.type == 'fight', note: log.type == 'note', quest: log.type == 'quest', treasure: log.type == 'treasure' }">
      <div class="title">
        {{log.title}}
        <span class="description">
          {{log.type}} - {{log.time.day}}/{{log.time.month}}/X{{log.time.year}} -
          {{getNumberDoubleDigit(log.time.hour)}}:{{getNumberDoubleDigit(log.time.minute)}}
          <span v-if="log.quest != ''">- {{questname_by_id(log.quest)}}</span>
        </span>
      </div>
      <div class="message">
        <div v-for="desc_line in log.log.split('\n')" :key="desc_line+Math.random()">{{desc_line}}</div>
      </div>
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
    },
    select_log: function(log) {
      this.$store.commit('select_log', log)
    },
    questname_by_id: function(quest_id) {
      return this.$store.getters.questname(quest_id)
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
  cursor: pointer;
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
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/lorc/compass.svg");
  border: solid #01579b 2px;
  background-color: #4181b4; /*rgba(1,87,155, 0.75);*/
}

/* NOTE */
.note {
  border: solid #607d8b 2px;
  background-color: rgba(96,125,139, 0.2);
}

.note > .message {
  border-top: solid #607d8b 2px;
}

.note_token {
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/delapouite/scroll-quill.svg");
  border: solid #607d8b 2px;
  background-color: #829ba8; /*rgba(96,125,139, 0.75);*/
}

/* QUEST */
.quest {
  border: solid #673ab7 2px;
  background-color: rgba(103,58,183, 0.2);
}

.quest > .message {
  border-top: solid #673ab7 2px;
}

.quest_token {
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/lorc/treasure-map.svg");
  border: solid #673ab7 2px;
  background-color: #8768c9; /*rgba(103,58,183, 0.75);*/
}

/* TREASURE */
.treasure {
  border: solid #fbc02d 2px;
  background-color: rgba(251,192,45, 0.2);
}

.treasure > .message {
  border-top: solid #fbc02d 2px;
}

.treasure_token {
  background-image: url("https://game-icons.net/icons/ffffff/transparent/1x1/skoll/open-treasure-chest.svg");
  border: solid #fbc02d 2px;
  background-color: #f5cd62; /*rgba(251,192,45, 0.75);*/
}
</style>
