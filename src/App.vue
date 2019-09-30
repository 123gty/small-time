<template>
	<div id="app">
		<router-view />
		
		
			<van-tabbar v-model="active" active-color="#feb63e">
				<van-tabbar-item icon="bell" to="/">首页</router-link></van-tabbar-item>
				<van-tabbar-item icon="youzan-shield" to="/yi">精选</router-link></van-tabbar-item>
				<van-tabbar-item icon="lock" to="/er">探店</router-link></van-tabbar-item>
				<van-tabbar-item icon="manager" to="/san">我的</router-link></van-tabbar-item>
			</van-tabbar>
		
		
	</div>
</template>
<script>
	export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="scss" >
	#app {
		 // margin-top:2rem;
		margin-bottom:4rem;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		// color: #2c3e50;
	}

</style>
