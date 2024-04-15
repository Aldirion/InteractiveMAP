<template>
  <ChartLine id="my-chart-id" :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line as ChartLine } from 'vue-chartjs';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = {
  labels: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ],
  datasets: [
    {
      label: 'Охват участников школ',
      backgroundColor: 'rgba(202, 200, 254, 1)',
      data: [
        400, 200, 820, 240, 390, 800, 1000, 200, 820, 240, 0, 800, 0, 200, 0, 240, 0, 800, 0, 200, 820, 240, 390, 800,
        1000,
      ],
      borderColor: 'rgba(149, 145, 253, 1)',
      tension: 0.4,
    },
    {
      label: 'Охват участников СПО',
      backgroundColor: 'rgba(253, 119, 80, 1)',
      data: [
        252, 1154, 352, 1066, 292, 1466, 1712, 1498, 1246, 1141, 622, 216, 909, 1699, 674, 1357, 152, 967, 579, 387,
        1405,
      ],
      borderColor: 'rgba(249, 72, 20, 1)',
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
