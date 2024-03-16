const mutations = {
    SET_REGIONS: (state, payload) => {
        state.regions = payload
        console.log("SETREGIONS", state.regions)
    },
    ADD_REGION: (state, payload) => {
        state.regions.push(payload)
    },
}

export default mutations