const mutations = {
    SET_REGION: (state, payload) => {
        state.region = payload
        console.log("SETREGION", state.region)
    },
}

export default mutations