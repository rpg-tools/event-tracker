<template>
  <div class="session_container">
    <div class="current_session">Session {{session}}</div>
    <div>
      <div class="subtitle">Session history :</div>
      <select v-model="selected_session" v-on:change="update_selected_session">
        <option v-for="session in getSessions()" :key="session" :value="session">Session #{{session}}</option>
      </select>
    </div>
    <div class="button" v-on:click="begin_new_session()">Begin new session</div>
  </div>
</template>

<script>
export default {
  name: "Session",
  data: function() {
    return {
      selected_session: this.$store.getters.selected_session
    }
  },
  computed: {
    session () {
      return this.$store.getters.session
    }
  },
  watch: {
    session (newSession) {
      this.selected_session = newSession
    }
  },
  methods : {
    getSessions: function() {
      let sessions = []

      for(let i=1; i<=parseInt(this.$store.getters.session); i++) {
        sessions.push(i)
      }

      return sessions
    },
    begin_new_session: function () {
      if (confirm("Are you sure to start a new session?")) {
        this.$store.commit('go_to_next_session')
      }
    },
    update_selected_session: function (event) {
      console.log(event.target.value)
      this.$store.commit('update_selected_session', event.target.value)
    }
  }
}
</script>

<style scoped>
  .session_container {
    color: #000000;
    font-family: 'Roboto', sans-serif;
    width: 100%;
  }

  .current_session{
    width: 100%;
    text-align: center;
    margin-bottom: 12px;
  }

  .subtitle{
    font-size: 12px;
  }

  select{
    width: 100%;
  }

  .button {
    text-transform: uppercase;
    font-size: 12px;
    min-width: 60px;
    background-color: rgba(240,240,240,0.6);
    border: solid rgba(240,240,240,0.6) 2px;
    font-family: 'Roboto', sans-serif;
    margin: 16px 4px;
    padding: 4px 16px;
    color: #2c3e50;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(20,20,20,0.4);
  }
</style>
