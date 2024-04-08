<script setup lang="ts">
	import router from '@/router';
	import LineChart from '@/components/charts/LineChart.vue';
	import RRC from '@/components/active_region/RRC.vue';
	import MapComponent from '@/components/map_origin/MapComponent.vue'

	let regionCode = window.location.pathname.slice(5);
	
	function regionTeam() {
		router.push({ name: 'active_region_team', params: { region_code: `${regionCode}` }});
	}

	function onRegionSelected(regionCode: string) {
		router.push({ name: 'active_region', params: { region_code: `${regionCode}` }});
	}
</script>

<template>
	<main class="region">
		<h2 class="region-map-title">Красноярский край</h2>	
		<div class="region-main-data">	
			<div class="region-map">
				<MapComponent v-on:regionSelected="onRegionSelected" :component-region-code="regionCode"/>
			</div>
			<RRC/>
		</div>
		
		<div class="modal-r">
			<div class="modal-r-card" @click="regionTeam()">
				<div class="modal-r-h">Региональная команда</div>
					<div class="modal-r-container"><div class="modal-r-indicator">
						22
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
		margin: 100px 0;
		font-size: 24px;
	}
	
	.region-main-data {
		display: flex;
		width: 100%;
		gap: 2vw;
		margin-bottom: 150px;
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


