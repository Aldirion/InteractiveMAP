const getters = {
    REGIONS: state => {
        return state.regions
    },
    REGION_BY_CODEGOST: state => codegost => {
        // console.log(codegost)
        if(state.regions == null)
			{
				return null
			}
			return state.regions.find(regions => regions.codegost === codegost)
    }
}

export default getters