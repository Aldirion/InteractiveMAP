<template>
  <Doughnut id="my-chart-id" :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
ChartJS.register(ArcElement, Tooltip, Legend);

const props = defineProps<{
  countInstitutions: number;
  notCoveredInstitutions: number;
}>();

const chartData = {
  datasets: [
    {
      data: [props.notCoveredInstitutions, props.countInstitutions],
      backgroundColor: ['rgba(253, 119, 80, 1)', 'rgba(149, 145, 253, 1)'],
    },
  ],
  labels: [`Не охваченных учреждений`, `Учреждения в контуре РДЦ`],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
};
</script>

<style scoped lang="css">
@media only screen and (max-width: 1100px) {
  #my-chart-id {
    height: 250px;
    width: 403px;
  }
}

@media only screen and (max-width: 600px) {
  #my-chart-id {
    height: 200px;
    width: 303px;
  }
}
</style>
