import { createRouter, createWebHistory } from 'vue-router';
import { useStoreAuthorization } from '@/store/authorization';
import GlobalMapComponent from '@/components/map_origin/GlobalMapComponent.vue';
import ActiveRegion from '../views/ActiveRegion.vue';
import RegionTeam from '../views/RegionTeamView.vue';
import EducateSpacesComponent from '@/components/educational_spaces/EducateSpacesComponent.vue';
import AuthorizationPage from '@/components/pages/AuthorizationPage.vue';
import PersonalAccountPage from '@/components/pages/PersonalAccountPage.vue';
import ErrorPage from '@/components/pages/ErrorPage.vue';
import SchoolsRegionData from '@/components/educational_spaces/SchoolsRegionData.vue';
import SPORegionData from '@/components/educational_spaces/SPORegionData.vue';
import UnderDevelopmentPage from '@/components/pages/UnderDevelopmentPage.vue';
import ActiveMunicipality from '@/components/municipalities/ActiveMunicipality.vue';
import UserProfileView from '@/components/user/UserProfileView.vue';
import EduenRegionSPO from '@/components/educational_spaces/EduenRegionSPO.vue';
import EduenvRegionSchools from '@/components/educational_spaces/EduenvRegionSchools.vue';
import RdcTeamView from '@/views/RdcTeamView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AuthorizationPage,
      meta: { requiresAuth: false },
    },
    {
      path: '/map',
      name: 'map',
      component: GlobalMapComponent,
      meta: { requiresAuth: true },
    },
    {
      path: '/rdc-team',
      name: 'rdc_team',
      component: RdcTeamView,
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
      path: '/map/:region_code/:municipality_code',
      name: 'active_municipality',
      component: ActiveMunicipality,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/develop',
      name: 'active_region_develop',
      component: UnderDevelopmentPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/schools',
      name: 'active_region_schools',
      component: SchoolsRegionData,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/spo',
      name: 'active_region_spo',
      component: SPORegionData,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/spo/:institution_eduenv',
      name: 'active_spo_eduenv',
      component: EduenRegionSPO,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/map/:region_code/schools/:institution_eduenv',
      name: 'active_school_eduenv',
      component: EduenvRegionSchools,
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
      path: '/map/:region_code/team/employee/:user_id',
      name: 'active_region_employee',
      component: UserProfileView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/rdc-team/:user_id',
      name: 'rdc_employee',
      component: UserProfileView,
      props: true,
      meta: { requiresAuth: true },
    },
    {
      path: '/personal-account',
      name: 'personal_account',
      component: PersonalAccountPage,
      meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error_page',
      component: ErrorPage,
      props: { requiresAuth: true },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const store = useStoreAuthorization();
  const isAuthenticated = await store.checkIfUserIsAuthenticated();

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
