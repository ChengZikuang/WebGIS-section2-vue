<template>
  <div class="weathercard">
    <!-- eltable4*4 -->
    <div class="table">
        <div class="column">
            <span>今日</span><span>07-04</span><span>阴</span><span>风力 1-3级</span>
        </div>
        <div class="column">
            <span>今日</span><span>07-04</span><span>阴</span><span>风力 1-3级</span>
        </div>
        <div class="column">
            <span>今日</span><span>07-04</span><span>阴</span><span>风力 1-3级</span>
        </div>
        <div class="column">
            <span>今日</span><span>07-04</span><span>阴</span><span>风力 1-3级</span>
        </div>
    </div>
    <!-- echart 双折线 -->
     <v-chart :option="option" style="height: 1600px;"></v-chart>
  </div>
</template>

<script setup>
const option = {
  title: {
    text: 'Temperature Change in the Coming Week'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: 'Highest',
      type: 'line',
      data: [10, 11, 13, 11, 12, 12, 9],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: 'Lowest',
      type: 'line',
      data: [1, -2, 2, 5, 3, 2, 0],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
};
</script>

<style lang="scss" scoped>
.weathercard{
    // :deep(.el-col){
    //     text-align: center;
    // }
    .table{
        display: flex;
        justify-content: space-between;
        padding: 50px;
      .column{
        display: flex;
        flex-direction: column;
    }  
    }
    
}
</style>
