<script>
    export default {
        props: {
            indicator: {type: Object, default: () => ({title: ""})},
            // show: {type: Boolean, default: () => true}
        },
        mounted() {
            console.log(indicator)
        },
    }
</script>

<template>
    <div class="indicaror-container">
<!-- <h1>Региональная команда</h1> -->
        <div class="indicator-h">{{indicator.title}}</div>
        <div class="indicator-val">
        {{indicator.val}}
        </div>
        <div class="indicator-body">{{ indicator.body }}</div>
        <!-- <h2 style="text-align: center;">Сотрудников</h2> -->
    </div>	
</template>

<style>
.indicator-container {
	/* display:flex; */

	max-width: 400px;
	width: 100%;
	/* padding: 20px; */
	margin: 20px 5px;
	border-radius: 2px;
	background: var(--color-background-soft);

}

.indicator-h {
	margin: 0 auto;
	display: block;
	padding: 5px;
	/* width: 100%; */
	color: var(--color-heading);
	text-align: center;
	font-weight: bold;
	font-size: 1rem;
	background: var(--color-background-mute);
}
.indicator-val {
	margin-top: 0;
	display: table;
	/* position: relative; */
	width: 100%;
	color: rgba(149, 145, 253, 1);
	text-align: center;
	font-weight: bold;
	font-size: 5rem;
}

.indicator-body {
	margin: 20px 0;
    color: var(--color-text);
    }
</style>