// import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import regions from './modules/regions/regions'
import region from './modules/region/region';
import employee from './modules/employee/employee';
// import modules from './modules'
// const BASE_URL="http://localhost:8000/api/v1";
const BASE_URL="http://5.35.87.82:8000/api/v1";


// Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
	},
	actions: {
		GET_ACTIVE_REGION: async ({commit, state, dispatch}, payload) => {
			// console.log(savedRegionId)
			let queryparam="?regionid="
			if (payload!=null) {
				queryparam+=payload
			}
			dispatch('GET_EMPLOYEES_REG', payload)
		},
	},
	mutations: {
	},
	getters: {
	},
	modules: {
		regions, region, employee
	}
	
});
export default store