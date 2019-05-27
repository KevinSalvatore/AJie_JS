var app = new Vue({
  el: "#app",
  data: {
    content: "abc"
  },
  methods: {
    reverseMsg() {
      this.content = this.content
        .split("")
        .reverse()
        .join("");
    }
  }
});
