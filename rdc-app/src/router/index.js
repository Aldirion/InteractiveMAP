import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import MapView from '../views/MapView.vue'
import ActiveRegion from '../views/ActiveRegion.vue'
import ModuleTestView from '../views/ModuleTestView.vue'
// import Vue from 'vue'
import * as Vue from 'vue'

const region_code = 'RU-KYA'

const router = createRouter({
  	history: createWebHistory(import.meta.env.BASE_URL),
  	routes: [
    {
		path: '/',
		name: 'home',
		component: MapView
    },
    {
		path: '/test',
		name: 'test',
		component: () => import('../views/TestView.vue'),
	// 	children: [
	// 		{
	// 			name: 'test_region',
	// 			path: '/test/:region_code',
	// 			component: ActiveRegion,
	// 			props: {activeRegion: false}
	// 		}
    //   ]
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
		path: '/test/:region_code',
		name: 'test_region',
		component: ActiveRegion,
		props: {activeRegion: false}
    },
	{
		path: '/test/:region_code/:municipality_code',
		name: 'test_municipality',
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
