<template>
  <Doughnut id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
ChartJS.register(ArcElement, Tooltip, Legend);
const chartData = {
  datasets: [
    {
      data: [482, 690],
      backgroundColor: ['rgba(202, 200, 254, 1)', 'rgba(149, 145, 253, 1)'],
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

<style></style>
