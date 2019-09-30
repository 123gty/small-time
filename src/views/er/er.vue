<template>
	<div>
		
		<Header/>
		<div class="bottom">
	
			<van-col span="24"><p class="biao">推荐</p>
				<div class="swiper-container">
					<div class="swiper-wrapper" >
						<div class="swiper-slide" v-for="item in 6">
							<p>体会手作的质朴和专注</br>活成一朵花</p>
						</div>
						
					</div>
				</div>
		
			</van-col>
		</div>
		
		<span class="biao">猜你喜欢</span>

		<div class="xia">
			<van-row>
				<van-col span="12"><a><img src="https://www.vmgirls.com/wp-content/themes/Cosy/timthumb.php?src=https://www.vmgirls.com/image/2019/07/2019-07-18_00-54-40.jpg&h=450&w=450&zc=1&a=c&q=100&s=1"></a>
					<p>在无酒单酒馆...，</p>
					
				</van-col>
				<van-col span="12"><a><img src="https://www.vmgirls.com/wp-content/themes/Cosy/timthumb.php?src=https://www.vmgirls.com/image/2019/07/2019-07-18_00-54-40.jpg&h=450&w=450&zc=1&a=c&q=100&s=1"></a>
					<p class="hanghao">共享静默时光...</p>
					
				</van-col>
			</van-row>
			
		</div>
		
	</div>
</template>

<script>
	import Header from '../header/index.vue'
	function getRand(min, max) {
		return parseInt(Math.random() * (max - min + 1) + min);
	}
function fn() {
		var str = "0123456789abcdef";
		var color = "#";
		for (var i = 0; i < 6; i++) {
			var rand = getRand(0, 15);
			var ch = str.charAt(rand);
			//console.log(ch);
			color += ch;
		}
		return color;
	}
	export default{
		data(){
			return {
			yanse:fn()
			}
		},
		created() {
			// console.log(this.yanse)
		},
		components:{
			Header
		},
		mounted() {
		
			new Swiper('.swiper-container', {
				slidesPerView: 2.2,
				spaceBetween: 15, //间距
				freeMode: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			})
		
		},
	}
</script>

<style scoped="scoped">
	*{
		background: #FEB63E;
	}
	.swiper-slide{
		float: left;
	}
	.swiper-slide p{
		padding-top: 1rem;
		line-height: 2rem;
		text-align: center;
		margin:10%;
		border-radius: 10%;
		width: 100%;
		height: 5rem;
		background: #007AFF;
		font-size: 12px;
	}
	.biao {
		
		color:#FFFFFF;
		line-height: 1rem;
		font-size: 1rem;
	}
	.xia {
		margin: 5% 10%;
		 background: #FFFFFF; 
		width: 80%;
		height: 12rem;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0px 1px 9px 0px rgba(170, 170, 170, 1);
		border: 1px solid rgba(255, 255, 255, 0);
	}
	.xia img {
		margin-top: 0.5rem;
		border-radius: 10px;;
		width: 6rem;
		height: 8rem;
	}
	
	.xia .van-row {
		margin: 5% 5%;
	}
	
	.xia .van-col {
		border-radius: 10px;
	
	}
	.hanghao{
		line-height: 1.5rem;
	}
	
	
</style>
