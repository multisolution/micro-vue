<template>
  <div id="app">
    <div id="counter-container">
      <div v-on:click="decrement" class="button counter-control">-</div>
      <div>{{counter}}</div>
      <div v-on:click="increment" class="button counter-control">+</div>
      <div id="dispatch" class="button" v-on:click="dispatch">Dispatch</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      counter: 0
    };
  },
  created: function() {
    window.addEventListener("increment_evt", evt => {
      this.counter++;
      console.log("event received", evt.detail, this);
    });
  },
  methods: {
    increment: function() {
      this.counter++;
    },
    decrement: function() {
      this.counter--;
    },
    dispatch: function() {
      var payload = {
        target: "vue"
      };
      var event = new CustomEvent("increment", {
        detail: payload
      });
      window.dispatchEvent(event);
      console.log("event sent", payload);
    }
  }
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
}

#counter-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 150px;
}

.button {
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background-color: cornflowerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
}

#dispatch {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  margin-top: 10px;
}
</style>


