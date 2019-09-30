<template>
	<div>
		<Header/>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
		<button @click="backTop">shangqu</button>

		<h1>san</h1>
		<h1>san</h1>
		<h1>san</h1>
	</div>
</template>

<script>
	
	import Header from '../header/index.vue'

	export default {
		data() {
			return {
				backToTop: false
			}
		},
		components:{
			Header
		},
		methods: {
			backTop() {
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}
		}

	}
</script>

<style scoped>
</style>
