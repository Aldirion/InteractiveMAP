import { createRouter, createWebHistory } from 'vue-router'
import MapView from '../views/MapView.vue'
import ActiveRegion from '../views/ActiveRegion.vue'
import ModuleTestView from '../views/ModuleTestView.vue'
import RegionTeam from '../views/RegionTeamView.vue'

// const region_code = 'RU-KYA'

const router = createRouter({
  	history: createWebHistory(import.meta.env.BASE_URL),
  	routes: [
    {
		path: '/',
		name: 'home',
		component: MapView
    },
    {
		path: '/map',
		name: 'map',
		component: MapView,
		// children: [
		//   {
		//     path: 'region/:code',
		//     component: ActiveRegion
		//   }
		// ]
    },
    {
		path: '/map/:region_code',
		name: 'active_region',
		component: ActiveRegion,
		// props: {activeRegion: true}
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
    {
      name: 'module_test',
      path: '/test_module',
      component: ModuleTestView
    }
  ]
})

export default router
