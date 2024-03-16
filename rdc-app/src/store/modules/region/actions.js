import axios from "axios"
// const BASE_URL="http://localhost:8000/api/v1"
const BASE_URL="http://5.35.87.82:8000/api/v1"


const actions = {
    GET_REGION: async ({commit, dispatch}, payload) => {
        let queryparam = ""
			let url = import.meta.env.VITE_BASE_URL+"/region"
			if (payload != null) {
				queryparam += payload
				// console.log("QUERYPARAM", queryparam)
			}
			url += queryparam
			console.log("API URL:", url)
			let {data} = await axios.get(url)
			await dispatch('GET_EMPLOYEES_REG', data[0].regionid)
			commit('SET_REGION', data)
    },
}
export default actions