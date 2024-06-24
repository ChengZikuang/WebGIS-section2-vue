import Vue from "vue";
import App from "./App.vue";
import "./plugins/vue-chart.js";
import "./plugins/element-ui.js";
import "./main.css";
import "reset-css";

new Vue({
  render: (h) => h(App),
}).$mount("#app");
