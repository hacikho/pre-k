new Vue({
  el: "#app",
  data: { attachRed: false, color1: "green", color: "red" },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});
