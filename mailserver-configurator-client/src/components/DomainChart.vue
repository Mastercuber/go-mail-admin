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
        labels: ["Domains"],
        datasets: [
          {
            backgroundColor: ["#4CAF50"],
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
    Client.getDomains().then((res) => {
      if (res.response.status === 404) {
        this.chartData = this.getDataObject(12)
      } else if (res.response.status === 200) {
        this.chartData = this.getDataObject(res.data.length)
      }
    })
  },
  methods: {
    getDataObject: data => ({
      labels: ["Domains"],
      datasets: [
        {
          backgroundColor: ["#4CAF50"],
          data: [data]
        }
      ]
    })
  }
};
</script>
<template>
  <Doughnut :data="chartData" :options="chartOptions"/>
</template>