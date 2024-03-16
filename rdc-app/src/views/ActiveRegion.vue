<script defer>
// import { ProCalendar } from '@lbgm/pro-calendar-vue';
// import Indicator from './cards/Indicator.vue'
import BarChart from '../components/charts/BarChart.vue';
import DonughtChart from '../components/charts/DonughtChart.vue';
import LineChart from '../components/charts/LineChart.vue';
import RegionMap from '../components/active_region/map_region/RegionMap.vue';
import TooltipHoverMunicipality from '../components/active_region/map_region/TooltipHoverMunicipality.vue';
import RRC from '../components/active_region/RRC.vue';
import {ref, isProxy, toRaw, computed } from 'vue';
import {useFloating} from '@floating-ui/vue';
import { mapGetters, mapActions, mapState} from 'vuex';
import { RouterView } from 'vue-router';
// import ProCalendar from './ProCalendar.vue';

const reference = ref(null);
const floating = ref(null);
const {floatingStyles} = useFloating(reference, floating);
export default {
	props: ['region_code'],
	data() {
		return {
			baseUrl: '/regions/',
			height: 0,
			mgleft: "",
			hoverMunicipality: null,
			activeMunicipality: null,
			tooltipCoords: {},
			activeRegion: null,
			employees: false,
			activeRegionId: 0,
			rcHead: null,
		}
	},
	async mounted() {
		const element=document.querySelector("#app")
		this.mgleft=window.getComputedStyle(element).marginLeft
		this.height = this.$el?.offsetHeight
		console.log("ActiveRegionROUTERPARAM", this.regionCodeGost=this.$route.params.region_code, "PROPSREGION: ", this.regionCodeGost)
		let queryparam=""
		queryparam+="?codegost="+this.region_code
		console.log("ACTRQURPAR:", queryparam)
		await this.GET_REGION(queryparam)
		this.activeRegion=this.REGION
		console.log("URLCODEGOST: ", this.region_code)
		console.log("ACTIVEREGION: ", this.activeRegion)
		// console.log(this.getRegionId)
		if (isProxy(this.activeRegion))
		{
			this.getRegionId()
		}
		// await GET_ACTIVE_REGION(this.activeRegionId)
		this.employees=this.EMPLOYEES
		console.log("EMPLOYEES: ", this.employees)
		this.rcHead =  this.rcHead_EMPLOYEE
		
	},
	methods:
	{
		setHoverMunicipality (municipality = null) {
			this.hoverMunicipality = municipality
		},
		setActiveMunicipality (municipality = null) {
			this.activeMunicipality = municipality
            this.$router.push({ name: 'active_municipality', params: { municipality_code: `${this.activeMunicipality.code}` } })
			console.log(municipality)
		},
		setTooltipCoords (mouse = null) {
			this.tooltipCoords.x = mouse?.pageX
			this.tooltipCoords.y = mouse?.pageY
			this.tooltipCoords.mgl=this.mgleft.replace("px","")
		},
		...mapActions([
			'GET_REGION',
			'GET_ACTIVE_REGION',
		]),
		getRegionId ()
		{
			if (this.activeRegion!=null)
			{
				for (let item of this.activeRegion)
				{
					// console.log("ITEM: ",item, "REGION_CODEGOST: ", this.regionCodeGost)
					if (item.codegost==this.regionCodeGost)
					{
						this.activeRegionId=item.regionid
						console.log("activeRegionID: ", this.activeRegionId)
					}
				}
			}
		},
		regionTeam()
		{
			this.$router.push({ name: 'active_region_team'})
		}
	},
	computed: {
		svgURL(){
			return this.baseUrl + this.region.code + '.svg'
		},
		...mapState ({
			region: state => state.module.region
		})
		,
		...mapGetters([
				'REGION',
				'EMPLOYEES',
				'EMPLOYEE_BY_POSTID'
		]),
		employeesCount() {
			return this.EMPLOYEES.length
		},
		rcHead_EMPLOYEE() {
			// console.log(this.EMPLOYEE_BY_POSTID(25))
			return this.EMPLOYEE_BY_POSTID(25)
		}
	},
	components: {TooltipHoverMunicipality, BarChart, DonughtChart, LineChart, RegionMap, RRC}
}


</script>



<template>
    <main>
		<div v-if="activeRegion" class="modal-mask">	
			<h1>
				{{ activeRegion.title }}
				<!-- {{ activeMunicipality }} -->
				<!-- {{ getRegion.regionid }} -->
				<!-- <button class="material-symbols-outlined" @click="closeModal">
					close
				</button> -->
				<!-- {{ getRegion.get(title) }} -->
			</h1>
			<div class="modal-r" style="flex-wrap: wrap; margin-bottom: 20px; margin-top: 20px; align-items: center;">	
				<div style="margin-right: 50px; ">
					<!-- {{ region_code }} -->
					<RegionMap 
	  					@setHoverMunicipality="setHoverMunicipality" 
	  					@setActiveMunicipality="setActiveMunicipality"
						@setTooltipCoords="setTooltipCoords"
					/>
					
					<!-- <img :src="svgURL"> -->
					<!-- <MapSVG v-if="region" :region="region" /> -->
				</div>
				<RRC :rcHead="rcHead"></RRC>
			</div>
			
			<div class="modal-r">
				<div v-if="employees" class="modal-r-card" @click="regionTeam">
					<div class="modal-r-h">Региональная команда</div>
						<div class="modal-r-container"><div class="modal-r-indicator">
							<!-- 710 -->
							{{ employeesCount }} 
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
			<TooltipHoverMunicipality v-if="hoverMunicipality" :municipality="hoverMunicipality"
					:coords="tooltipCoords"/>
		</div>	
	</main>
</template>



<style>
.modal-mask {
	max-width: 1280px;
	/* display:flex; */
	position:relative;
	/* top:0; */
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
	/* align-items:center; */
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
	align-items: center;
	display:flex;
	gap: 1rem 2rem;
	padding: 10px;
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


