<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Tooltip, ArcElement } from "chart.js";
import Client from "../service/Client";

ChartJS.register(Tooltip, ArcElement)

export default {
  components: {
    Doughnut
  },
  data() {
    return {
      chartData: {
        labels: ["Enabled", "Disabled"],
        datasets: [
          {
            backgroundColor: ["#4CAF50", "#F44336"],
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        legend: { display: false }
      }
    }
  },
  mounted() {
    Client.getAlias().then((res) => {
      if (res.response.status === 404) {
        this.chartData = this.getDataObject([10, 3])
      } else if (res.response.status === 200) {
        let enabled = 0;
        let disabled = 0;

        for(var i = 0; i < res.data.length; i++) {
          if(res.data[i].enabled) {
            enabled++;
          } else {
            disabled++;
          }
        }

        this.chartData = this.getDataObject([enabled, disabled])
      }
    })
  },
  methods: {
    getDataObject: data => ({
      labels: ["Enabled", "Disabled"],
      datasets: [
        {
          backgroundColor: ["#4CAF50", "#F44336"],
          data
        }
      ]
    })
  }
};
</script>
<template>
  <Doughnut :data="chartData" :options="chartOptions"/>
</template>