<template>
  <div class="secondcomp">
    <el-card shadow="hover">
      <template v-slot:header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">销售额</el-menu-item>
          <el-menu-item index="2">访问量</el-menu-item>
        </el-menu>
        <div class="right">
          <el-radio-group v-model="radio">
            <el-radio-button label="今日"></el-radio-button>
            <el-radio-button label="本周"></el-radio-button>
            <el-radio-button label="本月"></el-radio-button>
            <el-radio-button label="今年"></el-radio-button>
          </el-radio-group>
          <el-date-picker
            v-model="time_value"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </template>
      <div class="content">
        <div class="left_chart">
          <v-chart :option="option" />
        </div>
        <div class="right_list">
          <div class="title">排行榜</div>
          <div class="item_list" v-for="(item, index) in List" :key="index">
            <span :class="{ top_3: index < 3 }">{{ item.no }}</span
            ><span>{{ item.title }}</span
            ><span>{{ item.sales }}</span>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { getSaleData } from "@/api/index.js";

export default {
  data() {
    return {
      activeIndex: "1",
      radio: "今日",
      time_value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      option: {},
      List: [],
      Data: {},
    };
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
      console.log(this.activeIndex);
      if (index === "1") {
        this.List = this.Data.saleRank;
        this.renderChart(this.Data.saleFulleYearAxis, this.Data.saleFulleYear);
      } 
      else {
        this.renderChart(this.Data.visitFullYeadAxis, this.Data.visitFullYear);
        this.List = this.Data.visitRank;
      }
    },
    renderChart(v1, v2) {
      this.option = {
        title: {
          text: "年度销售额",
          textStyle: {
            fontSize: 14,
            fontWeight: 500,
          },
        },
        grid: {
          left: 40,
        },
        xAxis: {
          type: "category",
          data: v1,
          axisTick: {
            alignWithLabel: true,
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dotted",
            },
          },
        },
        series: {
          type: "bar",
          data: v2,
          barWidth: "30%",
        },
        color: "skyblue",
      };
    },
  },
  async mounted() {
    const res = await getSaleData();
    this.Data = res.data;
    this.List = this.Data.saleRank;
    this.renderChart(this.Data.saleFulleYearAxis, this.Data.saleFulleYear);
  },
};
</script>

<style lang="scss" scoped>
.secondcomp {
  position: relative;
  margin-top: 20px;
  .el-card {
    :deep(.el-card__header) {
      padding: 0px;
      border-bottom: none;
      .el-menu {
        padding-left: 50px;
      }
      .right {
        position: absolute;
        right: 2%;
        top: 10px;
        .el-radio-group {
          margin-right: 20px;
        }
      }
    }
  }
  .content {
    display: flex;
    .left_chart {
      flex: 0 0 70%;
      height: 434px;
    }
    .right_list {
      flex: 1;
      .title {
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 600;
      }
      .item_list {
        display: flex;
        gap: 20px;
        margin: 20px 0;
        span:nth-child(2) {
          flex: 1;
        }
        span:nth-child(1) {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          text-align: center;
          line-height: 20px;
        }
        span.top_3 {
          background-color: #09b3f7;
          color: #fff;
        }
      }
    }
  }
}
</style>
