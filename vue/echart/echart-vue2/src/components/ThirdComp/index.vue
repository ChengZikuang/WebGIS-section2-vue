<template>
  <div class="thirdcomp">
    <div class="left">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="card_title">关键词搜索</div>
        </template>
        <div class="main">
          <div class="chart">
            <div class="left-chart">
              <div class="title">搜索用户量</div>
              <div class="number">{{ totalUser }}</div>
              <v-chart :option="option1"></v-chart>
            </div>
            <div class="right-chart">
              <div class="title">搜索量</div>
              <div class="number">{{ totalSearch }}</div>
              <v-chart :option="option2"></v-chart>
            </div>
          </div>
          <div class="table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="rank" label="排行" width="180">
              </el-table-column>
              <el-table-column
                prop="keyWord"
                label="关键词"
                width="180"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="totalSearch"
                label="总搜索量"
                align="center"
              >
              </el-table-column>
              <el-table-column
                prop="totalUser"
                label="搜索用户数"
                align="center"
              >
              </el-table-column>
            </el-table>
          </div>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalDate.length"
            :page-size="pageSize"
            @current-change="handlePageChange"
          >
          </el-pagination>
        </div>
      </el-card>
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="card_title">分类销售排行</div>
          <el-radio-group v-model="radio" @input="handleInput">
            <el-radio-button label="品类"></el-radio-button>
            <el-radio-button label="商品"></el-radio-button>
          </el-radio-group>
        </template>
        <div class="chart">
          <v-chart :option="option3"></v-chart>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getKeywordData, getCategorydata } from "@/api/index.js";
export default {
  data() {
    return {
      option1: {},
      option2: {},
      tableData: [],
      totalDate: [],
      pageSize: 6,
      radio: "品类",
      option3: {},
      categoryData:{},
    };
  },
  methods: {
    handlePageChange(page) {
      this.tableData = this.totalDate.slice(
        (page - 1) * this.pageSize,
        page * this.pageSize
      );
    },
    handleInput(label){
        if (label === "品类") {
            this.renderChart3(this.categoryData.data1);
        } else {
            this.renderChart3(this.categoryData.data2);
        }
    },
    renderChart(data1, data2) {
      this.option1 = {
        grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
        },

        xAxis: {
          type: "category",
          show: false,
          boundayGap: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: data1,
            type: "line",
            itemStyle: {
              opacity: 0,
            },
            areaStyle: {
              color: "skyblue",
            },
            smooth: true,
          },
        ],
      };
      this.option2 = {
        grid: [
          {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
          },
        ],
        xAxis: {
          type: "category",
          show: false,
          boundayGap: false,
        },
        yAxis: {
          type: "value",
          show: false,
        },
        series: [
          {
            data: data2,
            type: "line",
            itemStyle: {
              opacity: 0,
            },
            areaStyle: {
              color: "skyblue",
            },
            smooth: true,
          },
        ],
      };
    },
    renderChart3(data) {
      this.option3 = {
        title: [
          {
            text: "品类分布",
            textStyle: {
              fontSize: 14,
              color: "#666",
            },
            left: 20,
            top: 20,
          },
          {
            text: "累计订单量",
            subtext: data.reduce((acc,cur)=> acc+cur.value,0),
            x: "40%",
            y: "45%",
            textAlign: "center",
            textStyle: {
              fontSize: 14,
              color: "#999",
            },
            subtextStyle: {
              fontSize: 28,
              color: "#333",
            },
          },
        ],
        tooltip: {
          formatter(params) {
            return (
              params.seriesName +
              "<br/>" +
              params.marker +
              params.data.title +
              "<br/>" +
              params.marker +
              "销售额：" +
              params.data.value
            );
          },
        },
        legend: {
          orient: "vertical",
          left: "80%",
          top: "top",
          textStyle: {
            color: "#888",
          },
        },
        series: {
          type: "pie",
          name: "品类分布",
          data: data.map((item) => {
            return {
              title: item.title,
              value: item.value,
              name: item.title + "|" + item.value,
            };
          }),
          radius: ["45%", "60%"],
          center: ["40%", "50%"],
          label: {
            position: "outside",
            show: true,
            formatter(params) {
              return params.data.title;
            },
          },
          itemStyle: {
            borderWidth: 8,
            borderColor: "#fff",
          },
        },
      };
    },
  },
  computed: {
    totalSearch() {
      return this.totalDate.reduce((acc, cur) => acc + cur.totalSearch, 0);
    },
    totalUser() {
      return this.totalDate.reduce((acc, cur) => acc + cur.totalUser, 0);
    },
  },
  async mounted() {
    const KeywordData = await getKeywordData();
    this.totalDate = KeywordData.data;
    this.tableData = this.totalDate.slice(0, 6);
    const data2 = this.totalDate
      .map((item) => item.totalSearch)
      .slice(0, 10)
      .reverse();
    const data1 = this.totalDate
      .map((item) => item.totalUser)
      .slice(0, 10)
      .reverse();
    this.renderChart(data1, data2);

    const Categorydata = await getCategorydata();
    this.categoryData = Categorydata.data;
    this.renderChart3(this.categoryData.data1);
  },
};
</script>

<style lang="scss" scoped>
.thirdcomp {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  & > div {
    flex: 1;
  }
  .card_title {
    font-weight: 600;
  }
  .left {
    .el-card {
      height: 100%;
    }
    .card_title {
      font-weight: 600;
    }
    .main {
      padding: 20px;
      .chart {
        display: flex;
        & > div {
          flex: 1;
        }
        // .left-chart {
        //   height: 100%;
        //   width: 100%;
        // }
        .echarts {
          height: 50px;
        }
        .title {
          font-size: 14px;
          color: #727171;
        }
        .number {
          font-size: 20px;
          font-weight: 600;
          margin-top: 10px;
        }
      }
      .table {
      }
      .el-pagination {
        display: flex;
        justify-content: flex-end;
        margin-top: 16px;
      }
    }
  }
  .right {
    .el-card {
      height: 100%;
      :deep(.el-card__body) {
        height: 558px;
        .chart {
          height: 100%;
        }
      }
      :deep(.el-card__header) {
        position: relative;
        .el-radio-group {
          position: absolute;
          right: 2%;
          top: 10%;
        }
      }
    }
  }
}
</style>
