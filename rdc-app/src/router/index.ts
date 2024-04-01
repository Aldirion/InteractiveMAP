import { createRouter, createWebHistory } from 'vue-router';
import MapComponent from '@/components/map_origin/MapComponent.vue';
import ActiveRegion from '../views/ActiveRegion.vue';
import ModuleTestView from '../views/ModuleTestView.vue';
import RegionTeam from '../views/RegionTeamView.vue';
import AuthorizationPage from '@/components/pages/AuthorizationPage.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
	{
		path: '/',
		name: 'home',
		component: AuthorizationPage
	},
	{
		path: '/map',
		name: 'map',
		component: MapComponent,
	},
	{
		path: '/map/:region_code',
		name: 'active_region',
		component: ActiveRegion,
		props: true,
	},
	{
		path: '/map/:region_code/team',
		name: 'active_region_team',
		component: RegionTeam,
	},
	{
		path: '/map/:region_code/:municipality_code',
		name: 'active_municipality',
		component: ModuleTestView,
		props: {activeRegion: false}
	},
	]
})

export default router
