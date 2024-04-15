import { createRouter, createWebHistory } from 'vue-router';
import GlobalMapComponent from '@/components/map_origin/GlobalMapComponent.vue';
import ActiveRegion from '../views/ActiveRegion.vue';
import RegionTeam from '../views/RegionTeamView.vue';
import EducateSpacesComponent from '@/components/educational_spaces/EducateSpacesComponent.vue';
import AuthorizationPage from '@/components/pages/AuthorizationPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthorizationPage,
    },
    {
      path: '/map',
      name: 'map',
      component: GlobalMapComponent,
    },
    {
      path: '/map/:region_code',
      name: 'active_region',
      component: ActiveRegion,
      props: true,
    },
    {
      path: '/map/:region_code/educational-spaces',
      name: 'active_region_educate',
      component: EducateSpacesComponent,
    },
    {
      path: '/map/:region_code/team',
      name: 'active_region_team',
      component: RegionTeam,
    },
    // {
    // 	path: '/map/:region_code/:municipality_code',
    // 	name: 'active_municipality',
    // 	component: ModuleTestView,
    // 	props: {activeRegion: false}
    // },
  ],
});

export default router;
