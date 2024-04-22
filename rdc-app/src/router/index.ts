import { createRouter, createWebHistory } from 'vue-router';
import GlobalMapComponent from '@/components/map_origin/GlobalMapComponent.vue';
import ActiveRegion from '../views/ActiveRegion.vue';
import RegionTeam from '../views/RegionTeamView.vue';
import EducateSpacesComponent from '@/components/educational_spaces/EducateSpacesComponent.vue';
import AuthorizationPage from '@/components/pages/AuthorizationPage.vue';
import { useStoreAuthorization } from '@/store/authorization';
import PersonalAccountPage from '@/components/pages/PersonalAccountPage.vue';

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
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code',
      name: 'active_region',
      component: ActiveRegion,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/educational-spaces',
      name: 'active_region_educate',
      component: EducateSpacesComponent,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/team',
      name: 'active_region_team',
      component: RegionTeam,
      meta: { requiresAuth: true },
    },
    {
      path: '/personal-account',
      name: 'personal_account',
      component: PersonalAccountPage,
      meta: { requiresAuth: true },
    },
    // {
    // 	path: '/map/:region_code/:municipality_code',
    // 	name: 'active_municipality',
    // 	component: ModuleTestView,
    // 	props: {activeRegion: false}
    // },
  ],
});

router.beforeEach(async (to, from, next) => {
  const store = useStoreAuthorization();

  const isAuthenticated = await store.checkIfUserIsAuthenticated();

  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
