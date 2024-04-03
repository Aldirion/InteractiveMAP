<script>
import BarChart from '../components/charts/BarChart.vue';
import DonughtChart from '../components/charts/DonughtChart.vue';
import LineChart from '../components/charts/LineChart.vue';
import RegionMap from '../components/active_region/map_region/RegionMap.vue';
import RRC from '../components/active_region/RRC.vue';
import {ref, isProxy } from 'vue';
import {useFloating} from '@floating-ui/vue';
import { mapGetters, mapActions, mapState} from 'vuex';

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
		let queryparam=""
		queryparam+="?codegost="+this.region_code
		await this.GET_REGION(queryparam)
		this.activeRegion=this.REGION
		if (isProxy(this.activeRegion))
		{
			this.getRegionId()
		}
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
			return this.EMPLOYEE_BY_POSTID(25)
		}
	},
	components: { BarChart, DonughtChart, LineChart, RegionMap, RRC}
}
</script>

<template>
	<main v-if="activeRegion" class="region">
		<h2 class="region-map-title">Красноярский край</h2>	
		<div class="region-main-data">	
			<div class="region-map">
				<RegionMap
					@setHoverMunicipality="setHoverMunicipality" 
					@setActiveMunicipality="setActiveMunicipality"
					@setTooltipCoords="setTooltipCoords"
				/>
			</div>
			<RRC :rcHead="rcHead"/>
		</div>
		
		<div class="modal-r">
			<div v-if="employees" class="modal-r-card" @click="regionTeam">
				<div class="modal-r-h">Региональная команда</div>
					<div class="modal-r-container"><div class="modal-r-indicator">
						{{ employeesCount }} 
					</div>
					<h2 style="text-align: center;">Сотрудников</h2>
				</div>	
			</div>
			<div class="modal-r-card">
				<div class="modal-r-h">Воспитательные пространства и объединения</div>
					<div class="modal-r-container">
						<div class="modal-r-indicator">
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

		<h1 class="region-title">Проекты Росдетцентра</h1>
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

		<h1 class="region-title">Мероприятия календарного плана воспитательной работы</h1>
		<div class="modal-r">
			<div class="modal-r-container">
				<LineChart />
			</div>
			<div class="modal-r-container">
				<!-- Календарь -->
				<!-- <ProCalendar /> -->
			</div>
		</div>

		<h1 class="region-title">Партнеры</h1>
		<div class="modal-r">
			<img style="padding:5px" src="/partners/unarmy.png">
			<img style="padding:5px" src="/partners/unarmy.png">
			<img style="padding:5px" src="/partners/unarmy.png">
			<img style="padding:5px" src="/partners/unarmy.png">
			<img style="padding:5px" src="/partners/unarmy.png">
		</div>
	</main>	
</template>

<style scoped>
	.region {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.region-title {
		text-align: center;
		margin: 50px 0;
		font-size: 24px;
	}
	
	.region-main-data {
		display: flex;
		width: 100%;
		gap: 2vw;
		margin-bottom: 50px;
	}

	.region-map {
		width: 40vw;
		max-height: 700px;
	}

	.region-map-title {
		text-align: center;
		font-size: 24px;
		padding: 20px 0;
	}

	.modal-r {
		display:flex;
		justify-content: center;
		flex-wrap: wrap;
		max-width: 1280px;
		gap: 30px calc(3rem - 8px);
	}

	.modal-r-card{
		width: 400px;
		border-radius: 0px 0px 5px 5px;
		background: var(--color-background-soft);
	}

	.modal-r-container {
		width: 100%;
		padding: 20px 10px;
	}

	.modal-r-h {
		padding: 10px;
		color: var(--color-text);
		text-align: center;
		font-weight: bold;
		font-size: 1rem;
		background: var(--color-background-mute);
		border-radius: 5px 5px 0px 0px;
	}
</style>


