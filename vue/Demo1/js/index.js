var app = new Vue({
  el: "#events",
  data: {
    event: {},
    events: []
  },
  ready() {
    this.$set("events", events);
  },
  methods: {
    addEvent() {
      this.events.push(this.event);
      this.event = {};
    },
    deleteEvent(index) {
      this.events.splice(index, 1);
    }
  }
});
