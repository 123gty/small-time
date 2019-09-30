<template>
	<div>
		<Toubu/>
		<div class="header">
			<ul>
				<li><div v-show=falg><van-icon :name=icon /><a>深圳</a></div></li>
				<li >{{title}}</li>
				<li><a v-show=falga><van-icon :name=icona /></a></li>
			</ul>
		</div>

	</div>
</template>

<script>
	import Toubu from './toubu.vue'
	export default {
		components:{
			Toubu
		},
		data() {
			return {
				title: this.$route.meta.title,
				icon: this.$route.meta.icon,
				icona: this.$route.meta.icona,
				falga: this.$route.meta.falga,
				falg: this.$route.meta.falg

			}
		},
		created(){
			

		},
		methods: {
			onClickLeft() {
				console.log(this.$route.meta)
			},
			onClickRight() {
				alert('按钮');
			}
		}
	}
</script>

<style scoped>
	.header {
		line-height: 3rem;
		background: #feb63e;
	}

	ul {
		display: flex;
		justify-content: space-between
	}

	li {
		color: #FFF;
		margin:0 3%;
		line-height: 3rem;
	}
	.van-icon{
		font-size: 1.3rem;
	}
</style>
