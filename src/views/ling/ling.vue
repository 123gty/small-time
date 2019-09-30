<template>
	<div class="home">
		<Header />
		<div class="top"></div>
		<div class="shang">
			<span class="biao">推荐热门城市</span>
			<van-row>
				<van-col span="8"><a class='tugao'><img src="../../../public/img/cnxh.jpg"></a>
					<p>北京</p>
				</van-col>
				<van-col span="8"><a class='tugao'><img src="../../../public/img/cnxh.jpg"></a>
					<p>重庆</p>
				</van-col>
				<van-col span="8"><a class='tugao'><img src="../../../public/img/cnxh.jpg"></a>
					<p>成都</p>
				</van-col>
			</van-row>
			<li class="h5">小时光带你一起发现周边美好小店~</li>
			<h4>这里有最热门的城市无论你想去哪，我们都陪着，提供你所
				需要的完美攻略,带你一起体验美好生活</h4>
			<van-button color="#fbb442">查看更多</van-button>
		</div>
		<div class="zhong">
			<span class="biao">分类</span>
			<van-row>
				<van-col span="6"><a class='shui'><img src="../../../public/img/fenlei.png"></a>
					<p>餐吧</p>
				</van-col>
				<van-col span="6"><a class='shui'><img src="../../../public/img/fenlei.png"></a>
					<p>旅社</p>
				</van-col>
				<van-col span="6"><a class='shui'><img src="../../../public/img/fenlei.png"></a>
					<p>生活馆</p>
				</van-col>
				<van-col span="6"><a class='shui'><img src="../../../public/img/fenlei.png"></a>
					<p>花房</p>
				</van-col>
			</van-row>
			<h4>这里有时下最火的小店推荐，快看看你喜欢哪一个生活的真谛就是懂得享受生活</h4>

		</div>
		<div class="xia">
			<span class="biao">猜你喜欢</span>
			<van-row>
				<van-col span="12"><a><img src="../../../public/img/cnxh.jpg"></a>
					<p>在无酒单酒馆，与Chap
						lin共享静默时光</p>
					<p>Chaplin Chaplin Bar</p>
					<p>小酒馆</p>
				</van-col>
				<van-col span="12"><a><img src="../../../public/img/cnxh.jpg"></a>
					<p>在无酒单酒馆，与Chap
						lin共享静默时光</p>
					<p>Chaplin Chaplin Bar</p>
					<p>小酒馆</p>
				</van-col>
			</van-row>
			<van-row style='margin-top:1rem'>
				<van-col span="12"><a><img src="../../../public/img/cnxh.jpg"></a>
					<p>在无酒单酒馆，与Chap
						lin共享静默时光</p>
					<p>Chaplin Chaplin Bar</p>
					<p>小酒馆</p>
				</van-col>
				<van-col span="12"><a><img src="../../../public/img/cnxh.jpg"></a>
					<p>在无酒单酒馆，与Chap
						lin共享静默时光</p>
					<p>Chaplin Chaplin Bar</p>
					<p>小酒馆</p>
				</van-col>
			</van-row>
		</div>

	</div>
</template>

<script>
	import Header from '../header/index.vue'
	export default {
		name: 'home',
		components: {
			Header
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.top {
		background: #fbb442;
		height: 10rem;
		position: relative
	}

	.shang,
	.zhong,
	.xia {
		float: left;
		margin: 10% 10%;
		position: absolute;
		top: 10%;
		background: #FFFFFF;
		width: 80%;
		height: 18rem;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0px 1px 9px 0px rgba(170, 170, 170, 1);
		border: 1px solid rgba(255, 255, 255, 0);
	}

	.zhong {
		margin: 115% 10% 0% 10%;
		float: left;
	}
	.shang p,.zhong p{
		line-height: 2rem;
	}

	.xia {
		margin: 220% 10% 25% 10%;
		float: left;
		height: 29rem;
	}

	.shang img {
		left: 163px;
		top: 128px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		line-height: 20px;
		background-color: rgba(145, 143, 143, 1);
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 0);
	}

	.h5 {
		line-height: 2rem;
		color: rgba(16, 16, 16, 1);
		font-size: 14px;
	}

	h4 {
		font-size: 12px;
		margin: 0 10%;
		color: rgba(16, 16, 16, 1);
	}

	.van-button {
		margin-top: 1rem;
		width: 50%;
		height: 2rem;
		line-height: 2rem
	}

	.tugao {
		height: 10rem;
	}

	.shui img {
		width: 3.5rem;
		height: 6rem;
	}


	

	.xia img {
		margin-top: 0.5rem;
		width: 6rem;
		height: 6rem;
	}

	.xia .van-row {
		margin: 0 5%
	}

	.xia .van-col {
		border-radius: 10px;
		box-shadow: 0px 1px 3px 0px rgba(170, 170, 170, 1);
		border: 1px solid rgba(255, 255, 255, 0);
	}

	.biao {
		line-height: 3rem;
		font-size: 1.3rem;
	}
</style>
