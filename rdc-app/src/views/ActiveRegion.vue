<script>
// import { ProCalendar } from '@lbgm/pro-calendar-vue';
// import Indicator from './cards/Indicator.vue'
import BarChart from '../components/charts/BarChart.vue';
import DonughtChart from '../components/charts/DonughtChart.vue';
import LineChart from '../components/charts/LineChart.vue';
import RegionMap from '../components/map_region/RegionMap.vue';
import TooltipHoverMunicipality from '../components/map_region/TooltipHoverMunicipality.vue';
import {ref} from 'vue';
import {useFloating} from '@floating-ui/vue';
// import ProCalendar from './ProCalendar.vue';

const reference = ref(null);
const floating = ref(null);
const {floatingStyles} = useFloating(reference, floating);

export default {
	props: {
		region: {type: Object, default: () => ({title: ""})},
	},
	data() {
		return {
			baseUrl: '/regions/',
			height: 0,
			hoverMunicipality: null,
			activeMunicipality: null,
			tooltipCoords: {},
		}
	},
	methods:
	{
		setHoverMunicipality (municipality = null) {
			// console.log(regionCode)
			this.hoverMunicipality = municipality
		},
		setActiveMunicipality (municipality = null) {
			// console.log('hel')
			this.activeMunicipality = municipality
            // this.$router.push({ name: 'test_region', params: { region_code: `${this.activeRegion.code}` } })
			console.log(municipality)
		},
		setTooltipCoords (mouse = null) {
			this.tooltipCoords.x = mouse?.pageX
			this.tooltipCoords.y = mouse?.pageY
			// console.log("Coords", this.tooltipCoords.x, " | ", this.tooltipCoords.y)

		},
        goHome(){
            router.push('')
        }
	},
	computed: {

		svgURL(){
			return this.baseUrl + this.region.code + '.svg'
		},
	},
	mounted() {
		this.height = this.$el?.offsetHeight
		console.log("mounted", this.region, " || ", this.height)
	},
	components: {TooltipHoverMunicipality, BarChart, DonughtChart, LineChart, RegionMap}
}


</script>



<template>
	<Transition name="modal">
		<div class="modal-mask">
			<TooltipHoverMunicipality v-if="hoverMunicipality" :municipality="hoverMunicipality"
					:coords="tooltipCoords"/>
			<h1>
				{{ region.title }}
				<!-- <button class="material-symbols-outlined" @click="closeModal">
					close
				</button> -->
			</h1>
			<div class="modal-r" style="flex-wrap: wrap; margin-bottom: 20px; margin-top: 20px; ">	
				<div style="margin-right: 50px; ">
					<RegionMap 
	  					@setHoverMunicipality="setHoverMunicipality" 
	  					@setActiveMunicipality="setActiveMunicipality"
						@setTooltipCoords="setTooltipCoords"
					/>
					
					<!-- <img :src="svgURL"> -->
					<!-- <MapSVG v-if="region" :region="region" /> -->
				</div>
				
				<div class="modal-r-info" style="max-width:750px; width:100%; border-left: 2px solid var(--color-border); padding-left: 20px; align-items:center;" >
					<div class="modal-r-container" style="width:100%">
						<!-- <h1 style="font-weight: bold;">Информация о регионе</h1>
						<h2>Столица: г. Красноярск</h2> -->
						<div  class="modal-r" style="margin-top: 20px; padding: 10px;">
							<img class="avatar" src="/partners/regcor.jpeg">
							<div class="modal-r-container" >
								<h2>
									Дюкарева Анна Сергеевна
								</h2>
								<h3>
									Региональный координатор проекта
								</h3>
								<a class="modal-r-body" href="mailto:navigatory.detstva.24@rosdetcentr.ru">
									<span class="material-symbols-outlined" style="float:left; padding:0 5px 0 0">
										mail
									</span>
									navigatory.detstva.24@rosdetcentr.ru
								</a>
							</div>
						</div>
						
						<div 
						style="
						/* background-color: var(--color-border);  */
						padding: 5px; 
						margin-bottom: 20px;">
						"""
							Съешь ещё этих мягких французских булок, да выпей же чаю
						</div>
						<div class="modal-r" style="padding:10px">
							<DonughtChart />
						</div>
						<!-- <div class="info-grid-indicators" style="width:100%">
							<div class="modal-r-container" >
								<div class="modal-r-indicator-small">1100</div>
								<div style="text-align: center; font-size:large;">
									школ
								</div>
								<div class="modal-r-indicator-light">690 в проекте</div>
							</div>
							<div class="modal-r-container" >
								<div class="modal-r-indicator-small">72</div>
								<div style="text-align: center; font-size:large;">
									СПО
								</div>
								<div class="modal-r-indicator-light">72 в проекте</div>
							</div>
						</div> -->
						<div class="info-grid-indicators" style="width:100%">
							<div class="modal-r-container" >
								<div class="modal-r-indicator-small">690</div>
								<div style="text-align: center; font-size:large;">
									школ в проекте
								</div>
								<div class="modal-r-indicator-light">1100 всего</div>
							</div>
							<div class="modal-r-container" >
								<div class="modal-r-indicator-small">72</div>
								<div style="text-align: center; font-size:large;">
									СПО в проекте
								</div>
								<div class="modal-r-indicator-light">72 всего</div>
							</div>
						</div>
					</div>
				</div>
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
					<div class="modal-r-h">Профильные смены</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
							1000
						</div>
						<h2 style="text-align: center;">Участников программ</h2>
					</div>
				</div>
			</div>
			<h1>Мероприятия календарного плана воспитательной работы</h1>
			<div class="modal-r">
				<div class="modal-r-container" style="width:100%; height:30vh">
					<LineChart />
				</div>
				<div class="modal-r-container">
					<!-- Календарь -->
					<!-- <ProCalendar /> -->
				</div>
			</div>
			<h1>Партнеры</h1>
			<div class="modal-r">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
				<img style="padding:5px" src="/partners/unarmy.png">
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

.avatar {
	width: 150px;
	height: 150px;
	object-fit: cover;
	object-position: top center;
	border-radius: 50%;
}

.modal-r {
	display:flex;
	flex-wrap: wrap;
	max-width: 1280px;
	gap: 30px calc(3rem - 8px);
	width: 100%;
	border-radius: 2px;
	transition: all 0.7s ease;
}

.modal-r-map{
	max-width: 400px;
	width:100%;
	place-items: center;
	display:flex;
	gap: 1rem 2rem;
	padding: 10px;
}
.modal-r-map [data-code] {
  fill: rgba(149, 145, 253, 1);
  stroke: rgb(245, 246, 250);

  transition: fill 0.2s;
  margin: 0 auto;
}
.modal-r-map [data-code]:hover {
  fill: rgba(202, 200, 254, 1);
  cursor: pointer;
  /* width: 100%;
	height:100%;
  transform:scale(1.01); */
}

.modal-r-info{
	display:flex;
	flex-grow: 2;
	gap: 20px calc(10rem - 10px);
}

.modal-r-card{
	display:block;
	flex-direction: column;
	max-width: 400px;
	width: 100%;
	border-radius: 2px;
	background: var(--color-background-soft);
}

.modal-r-container {
	padding: 20px 10px;
}

.modal-r-h {
	margin: 0 auto;
	padding: 10px;
	color: var(--color-text);
	text-align: center;
	font-weight: bold;
	font-size: 1rem;
	background: var(--color-background-mute);
}
.modal-r-indicator {
	margin-top: 0;
	display: table;
	width: 100%;
	color: rgba(149, 145, 253, 1);
	text-align: center;
	font-weight: bold;
	font-size: 5rem;
}
.modal-r-indicator-small {
	margin-top: 0;
	display: table;
	width: 100%;
	color: rgba(149, 145, 253, 1);
	text-align: center;
	font-weight: bold;
	font-size: 2rem;
}
.modal-r-indicator-light {
	margin-top: 0;
	display: table;
	width: 100%;
	color:var(--color-link);
	text-align: center;
	font-weight: bold;
	font-size: 1rem;
	border-top: 2px solid var(--color-border);
	/* border-color: var(--color-link); */
}

.info-grid-indicators {
	display: inline-grid;
	grid-template-columns: repeat(2, 1fr);
	gap:20px 10px;
	justify-content: stretch;
}

.modal-r-body {
	margin: 20px 0;
	color:var(--color-link)
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


</style>


