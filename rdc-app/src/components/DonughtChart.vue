<template>
    <Doughnut
        id="my-chart-id"
        :options="chartOptions"
        :data="chartData"
    />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
    components : {Doughnut},
    data () {
        return {
        chartData: {
            datasets: [
                {
                    data:[482,690],
                    backgroundColor: ['rgba(202, 200, 254, 1)', 'rgba(149, 145, 253, 1)'],
                },
                // {
                //     data:[1172],
                //     backgroundColor: ['rgba(50, 47, 116, 1)']
                // },
            ],
            labels: [`Не охваченных учреждений`,`Учреждения в контуре РДЦ`,],
        },
        chartOptions: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'right'
            }
            }
            }
        }
    }
}

</script>
