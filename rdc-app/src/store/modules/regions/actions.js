import axios from "axios"
// const BASE_URL="http://localhost:8000/api/v1"
const BASE_URL="http://5.35.87.82:8000/api/v1"


const actions = {
    GET_REGIONS: async ({commit}, payload) => {
        let url = import.meta.env.VITE_BASE_URL + "/region"
        console.log("API URL:", url)
        let {data} = await axios.get(url)
        commit('SET_REGIONS', data)
    },
    SAVE_REGION : async ({commit}, payload) => {
        let {data} = await axios.post('http://localhost:8000/api/v1/region')
        commit('ADD_REGION', payload)
    },
}

export default actions