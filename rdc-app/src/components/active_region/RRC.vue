<script>
import { mapGetters } from 'vuex'
import DonughtChart from '../charts/DonughtChart.vue'
export default {
    data(){
        return {
            dataReady:false,
			region:null,
        }
    },
    props: {
        region_code:"",
		rcHead: {type: Object, default: () => ({firstname: ""})}
    },
    mounted()
    {
        let queryparams = ""
        // this.getRegion
        // queryparams+="?regionid"+this.$router.params.region_code
        // console.log("RRC:CODEGOST:   ", this.region_code)
        // // queryparams+="?regionid="+this.getRegion.regionid
        // this.$store.dispatch('GET_EMPLOYEES', queryparams)
        // console.log("RRC: ", this.getRegion.regionid)
		console.log("RRC: ", this.region=this.REGION[0])
		console.log("RRCPARSED: ", this.region)
		console.log("RCHEAD", this.rcHead)
    },
    computed:
    {
        ...mapGetters([
				'REGION',
				'EMPLOYEE_BY_POSTID'
		]),
		rcHead_EMPLOYEE() {
			// console.log(this.EMPLOYEE_BY_POSTID(25))
			return this.EMPLOYEE_BY_POSTID(25)
		}
    },
    components:{DonughtChart}
}
</script>

<template>
    <div class="modal-r-info" style="max-width:750px; width:100%; border-left: 2px solid var(--color-border); padding-left: 20px; align-items:center;" >
					<div class="modal-r-container" style="width:100%">
						<!-- <h1 style="font-weight: bold;">Информация о регионе</h1>
						<h2>Столица: г. Красноярск</h2> -->
						<div  class="modal-r" style="margin-top: 20px; padding: 10px;">
							<img class="avatar" src="/partners/regcor.jpeg">
							<div class="modal-r-container" >
								<h2>
									<!-- Дюкарева Анна Сергеевна -->
									{{ rcHead.lastname }} {{ rcHead.firstname }} {{ rcHead.patronymic }}
								</h2>
								<h3>
									Региональный координатор проекта
								</h3>
                                <!-- <h4>{{ REGION }}</h4> -->
                                <h4>{{ region_code }}</h4>
								<a v-if="rcHead" class="modal-r-body" href="mailto:navigatory.detstva.24@rosdetcentr.ru">
									<span class="material-symbols-outlined" style="float:left; padding:0 5px 0 0">
										mail
									</span>
									<!-- navigatory.detstva.24@rosdetcentr.ru -->
									{{ rcHead.email }}
								</a>
							</div>
						</div>
						
						<div 
						style="
						/* background-color: var(--color-border);  */
						padding: 5px; 
						margin-bottom: 20px;">
						"""
							Съешь ещё этих мягких французских булок, да выпей же чаю
						</div>
						<div class="modal-r" style="padding:10px">
							<DonughtChart />
						</div>
						<div class="info-grid-indicators" style="width:100%">
							<div class="modal-r-container" >
								<div class="modal-r-indicator-small">690</div>
								<div style="text-align: center; font-size:large;">
									школ в проекте
								</div>
								<div v-if="region" class="modal-r-indicator-light">{{ region.countschool }} всего</div>
							</div>
							<div class="modal-r-container" >
								<div class="modal-r-indicator-small">72</div>
								<div style="text-align: center; font-size:large;">
									СПО в проекте
								</div>
								<div v-if="region" class="modal-r-indicator-light"> {{ region.countspo }} всего</div>
							</div>
						</div>
					</div>
				</div>
</template>

<style>


</style>