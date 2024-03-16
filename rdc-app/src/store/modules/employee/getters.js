import employee from "./employee"

const getters = {
    EMPLOYEES: state => {
        return state.employee
    },
    EMPLOYEE_BY_REGION: state => regionid => {
        if(state.employee == null)
			{
				return null
			}
			return state.employee.find(employee => employee.regionid === regionid)
    },
    EMPLOYEE_BY_POSTID: state => postid => {
        // console.log("POSTID: ",postid)
        // console.log("STATE_EMPLOYEE: ", state.employee)
        if(state.employee == null)
			{
				return null
			}
            // console.log("RCHEAD", state.employee.find(employee => employee.postid === postid))
			return state.employee.find(employee => employee.postid === postid)
    },
}
export default getters