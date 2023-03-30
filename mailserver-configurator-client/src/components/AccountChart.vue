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
        labels: ["Enabled", "Enabled (Sendonly)", "Disabled", "Disabled (Sendonly)"],
        datasets: [
          {
            backgroundColor: ["#4CAF50", "#8BC34A", "#F44336", "#EF5350"],
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
    Client.getAccounts().then((res) => {
      if (res.response.status === 404) {
        this.chartData = this.getDataObject([10, 2, 8, 3])
      } else if (res.response.status === 200) {
        let enabled_sendonly = 0;
        let enabled_receive= 0;
        let disabled_sendonly = 0;
        let disabled_receive = 0

        for(var i = 0; i < res.data.length; i++) {
          if(res.data[i].enabled) {
            if(res.data[i].sendonly) {
              enabled_sendonly++;
            } else {
              enabled_receive++;
            }
          } else {
            if(res.data[i].sendonly) {
              disabled_sendonly++;
            } else {
              disabled_receive++;
            }
          }

        }

        this.chartData = this.getDataObject([enabled_receive, enabled_sendonly, disabled_receive, disabled_sendonly])
      }
    })
  },
  methods: {
    getDataObject: data => ({
      labels: ["Enabled", "Enabled (Sendonly)", "Disabled", "Disabled (Sendonly)"],
      datasets: [
        {
          backgroundColor: ["#4CAF50", "#8BC34A", "#F44336", "#EF5350"],
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