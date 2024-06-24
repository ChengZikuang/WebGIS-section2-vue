<template>
  <div class="table">
    <el-row :gutter="20">
      <el-col :span="6"
        ><el-card shadow="hover">
          <div class="title">累计销售额</div>
          <div class="number">120000</div>
          <div class="chart">
            <div class="info">日同比<span>2.33%</span></div>
            <div class="info">月同比<span>4.14%</span></div>
          </div>
          <el-divider></el-divider>
          <div class="info">昨日销售额<span>￥200000</span></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="title">累计订单额</div>
          <div class="number">13145</div>
          <v-chart :option="smooth_table" class="chart" />
          <el-divider></el-divider>
          <div class="info">昨日销售额<span>￥ 12768</span></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="title">今日用户交易数</div>
          <div class="number">30</div>
          <v-chart :option="bar_table" class="chart" />
          <el-divider></el-divider>
          <div class="info">退货率<span>3.57%</span></div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="title">累计用户数</div>
          <div class="number">768923</div>
          <v-chart :option="singer_bartable" class="chart" />
          <el-divider></el-divider>
          <div class="info">
            日同比<span>12.35%</span>月同比<span>23.97%</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      smooth_table: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          show: false,
          boundaryGap: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            smooth: true,
            symbol: "none",
            lineStyle: {
              width: 0,
            },
            areaStyle: {
              opacity: 0.8,
              color: "purple",
            },
          },
        ],
      },
      bar_table: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
        ],
      },
      singer_bartable: {
        xAxis: {
          type: "value",
          max: 1000000,
          show: false, // 隐藏x轴
        },
        yAxis: {
          type: "category",
          data: [""],
          show: false, // 隐藏y轴
        },
        series: [
          {
            type: "bar",
            data: [768923],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "green",
              },
            },
            markPoint: {
              data: [
                {
                  coord: [768923, 0], // 第一个点（顶端箭头）
                  y: '90%', 
                  symbol: "triangle",
                  symbolRotate: 0,
                  symbolSize: [10, 15],
                  itemStyle: {
                    color: "green",
                  },
                },
                {
                  coord: [768923, 0], // 第二个点（底端箭头）
                  y: '1%', 
                  symbol: "triangle",
                  symbolRotate: 180,
                  symbolSize: [10, 15],
                  itemStyle: {
                    color: "green",
                  },
                },
              ],
            },
            // markLine: {
            //   data: [
            //     {
            //       xAxis: 1000000, // 灰色部分的终点
            //       lineStyle: {
            //         color: "#d3d3d3",
            //         width: 20,
            //       },
            //     },
            //   ],
            //   silent: true, // 禁用hover
            //   symbol: "none", // 不显示箭头
            // },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.table {
  margin-left: -10px;
  margin-right: -10px;
}
.el-card__body {
  border-radius: 4px;
  .title {
    font-size: 12px;
    color: #777;
    letter-spacing: 1px;
  }
  .number {
    font-size: 24px;
    font-weight: 600;
    margin-top: 10px;
  }
  .chart {
    width: 407px;
    height: 50px;
    user-select: none;
    padding: 0px;
    margin: 0px;
    border-width: 0px;
    //首栏居中
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
  }
  .info {
    font-size: 14px !important;
    color: #464545;
    span {
      margin-left: 8px;
      font-weight: 550;
    }
  }
}
</style>
