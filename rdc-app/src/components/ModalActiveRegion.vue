<script>
// import Indicator from './cards/Indicator.vue'
import BarChart from './BarChart.vue';
import DonughtChart from './DonughtChart.vue';
import LineChart from './LineChart.vue';
export default {
	props: {
		region: {type: Object, default: () => ({title: ""})},
	},
	data() {
		return {
			baseUrl: '/regions/',
			height: 0,
		}
	},
	methods:
	{
		closeModal() {
					this.$emit('close');
			},
	},
	computed: {
		x() {
			return this.width || 0
		},
		y() {
			return this.height || 0
		},
		svgURL(){
			return this.baseUrl + this.region.code + '.svg'
			console
		},
	},
	mounted() {
		this.height = this.$el?.offsetHeight
		console.log("mounted", this.region, " || ", this.height)
	},
	components: {BarChart, DonughtChart, LineChart}
}


</script>



<template>
	
	<Transition name="modal">
		<div class="modal-mask">
			<h1>
				{{ region.title }}
				<button class="material-symbols-outlined" @click="closeModal">
					close
				</button>
			</h1>
			<div class="modal-r" style="flex-wrap: nowrap; margin-bottom: 20px;">	
				<div class="modal-r-map">
					<img :src="svgURL" style=" ">
				</div>
				<div class="modal-r-info">
					<div class="modal-r-container" style="width:100%">
						<h1>Общая информация региона</h1>
						<h2>Столица: г. Красноярск</h2>
						<h3>Количество школ: 1100 Количество СПО: 72</h3>
						
						<!-- <BarChart /> -->
						<div class="modal-r-container" >
							<DonughtChart />
							<!-- <LineChart /> -->
						</div>
						
					</div>
					<!-- <Bar :data="chartData" :options="chartOptions" /> -->
				</div>
				<!-- <div class="modal-r-card">
					<div class="modal-r-container">
						<h1>Общая информация региона</h1>
						<h2>г. Красноярск</h2>
						<h3>Количество школ: 1100 Количество СПО: 72</h3>
					</div>
				</div> -->
				
				
			</div>
			<div class="modal-r">
				<div class="modal-r-card">
					<div class="modal-r-h">Региональная команда</div>
						<div class="modal-r-container"><div class="modal-r-indicator">
							710
						</div>
						<h2 style="text-align: center;">Сотрудников</h2>
					</div>	
				</div>
				<div class="modal-r-card">
					<div class="modal-r-h">Воспитательные пространства и объединения</div>
						<div class="modal-r-container"><div class="modal-r-indicator">
							2717
						</div>
						<h2 style="text-align: center;">Воспитательных пространств и объединений</h2>
					</div>	
				</div>
				<div class="modal-r-card">
					<div class="modal-r-h">Повышение квалификации</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							630
						</div>
						<h2 style="text-align: center;">Сотрудников, прошедших обучение по программам повышения квалификации</h2>
					</div>
				</div>
			</div>
			<h1>Проекты Росдетцентра</h1>
			<div class="modal-r">
				<div class="modal-r-card">
					<div class="modal-r-h">Навигаторы детства</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							1254
						</div>
						<h2 style="text-align: center;">Участников конкурса</h2>
					</div>
				</div>
				<div class="modal-r-card">
					<div class="modal-r-h">Лига Вожатых</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							72
						</div>
						<h2 style="text-align: center;">Участника конкурса</h2>
					</div>
				</div>
				<div class="modal-r-card">
					<div class="modal-r-h">Добро не уходит на каникулы</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							130
						</div>
						<h2 style="text-align: center;">Заявок на грантовый конкурс</h2>
					</div>
				</div>
				<div class="modal-r-card">
					<div class="modal-r-h">Орлята России</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							20000
						</div>
						<h2 style="text-align: center;">Орлят</h2>
					</div>
				</div>
				<div class="modal-r-card">
					<div class="modal-r-h">Орлята России</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							20000
						</div>
						<h2 style="text-align: center;">Орлят</h2>
					</div>
				</div>
			</div>
			<h1>Мероприятия календарного плана воспитательной работы</h1>
			<div class="modal-r">
				

				<div class="modal-r-container" style="width:100%">
					<LineChart />
					<!-- <div class="modal-r-indicator">
						График
					</div> -->
				</div>
				<div class="modal-r-container">
					<!-- <div class="modal-r-indicator">
						Календарь
					</div> -->
					
				</div>
				<!-- <div>fdjsglk</div> -->
			</div>
			<h1>Партнеры</h1>
			<div class="modal-r">
				<!-- <div class="modal-r-container">
					<h1>Партнеры</h1>
					<div class="modal-r-indicator">
						10
					</div>
				</div> -->
				<!-- <div>fdjsglk</div> -->
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<!-- <img style="padding:5px" src="/partners/unarmy.png"> -->
			</div>	
		</div>
	</Transition>
</template>



<style>
.modal-mask {
	max-width: 1280px;
	position: absolute;
	top:0;
	width: 100%;
	height: 100%;
	background: var(--color-background);
}

.modal-r {
	/* position:flex; */
	display:flex;
	flex-wrap: wrap;
	max-width: 1280px;
	/* gap: 2rem 1rem; */
	/* margin:20px 10px; */
	/* gap: 1rem 1rem; */
	gap: 30px calc(3rem - 8px);
	width: 100%;
	border-radius: 2px;
	transition: all 0.7s ease;
}

.modal-r-map{
	/* scale: auto; */
	/* width:100%; */
	max-width: 400px;
	width:100%;
	place-items: center;
	display:inline-block;
	gap: 1rem 2rem;
	padding: 10px;
}

.modal-r-info{
	display:flex;
	flex-grow: 2;
	/* gap: 10px; */
	gap: 30px calc(10rem - 10px);
	/* background: var(--color-background-mute); */
}

.modal-r-card{
	display:block;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	/* margin: 20px 5px; */
	border-radius: 2px;
	background: var(--color-background-soft);
}

.modal-r-container {
	padding: 20px 10px;
}



.modal-r-h {
	margin: 0 auto;
	/* display: inline-block; */
	padding: 10px;
	/* width: 100%; */
	color: var(--color-text);
	text-align: center;
	font-weight: bold;
	font-size: 1rem;
	background: var(--color-background-mute);
}
.modal-r-indicator {
	margin-top: 0;
	display: table;
	/* position: relative; */
	width: 100%;
	color: rgba(149, 145, 253, 1);
	text-align: center;
	font-weight: bold;
	font-size: 5rem;
	/* font-size: 50pt; */
	
	/* position: absolute; */


}

.modal-r-body {
	margin: 20px 0;
	color: #333;
}

.material-symbols-outlined{
	float: right;
	display: inline-block;
	background-color: transparent;
	border-color: transparent;
	color:var(--color-text)
}

.material-symbols-outlined :hover{
	background-color:rgba(255, 255, 255, 0)
}

.modal-default-button {
	float: right;
}

.modal-enter-from {
	opacity: 0;
}

.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}

/* @media (min-width: 1024px) {
	.modal-mask{
		min-height: 100vh;
		display: flex;
		align-items: center;
		//text-align: center;
	}
} */
</style>


<!-- <style>
/* Общий стиль тултипа */
.tooltip-hover-region
{
	position: absolute;
	min-width: 300px;
	top: 0;
	left: 0;
	background: #fff;
	border-radius: 15px;
	box-shadow: 1px 4px 10px 1px rgba(0, 0, 0, .2);
	/* padding: 15px; */
	color: #333;
	display: block;
}
/* Хэадер тултипа */
.tooltip-hover-region-h
{
	position: static;
	min-width: 100px;
	width: 100%;
	background: #5044ed;
	border-radius: 5px 5px 0 0;
	padding: 5px;
	color: #f5f5f5;
	font-weight: bold;
}
/* Тело тултипа */
.tooltip-hover-region-b
{
	position: flex;
	min-width: 100px;
	width: 100%;
	background: #fff;
	padding: 5px 10px 5px 10px;
	color: #333;
}
</style> -->