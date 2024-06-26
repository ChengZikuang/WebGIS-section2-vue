import Vue from "vue";
import vueEcharts from "vue-echarts";
import * as echarts from "echarts";
//grid
// import 'echarts/lib/component/grid';
// import { GridComponent } from 'echarts/components';

// echarts.use([GridComponent]);
//全局注册组件
Vue.component("v-chart", vueEcharts);
