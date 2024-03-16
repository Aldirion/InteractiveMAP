const mutations = {
    SET_EMPLOYEES: (state, payload) => {
        state.employee = payload
    },
    ADD_EMPLOYEES: (state, payload) => {
        state.employee.push(payload)
    },
}
export default mutations