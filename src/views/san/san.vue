<template>
	<div>
		<Header />
		<div class="top"> </div>
		<div class="shang">
			<img src="../../../public/img/cnxh.jpg">
			<p>【随风漂流】</p>
			<p>点击编辑个人信息</p>
		</div>
		<div class="bottom">
			<div>
				<ul>
					<li>
						<a><van-icon name="vip-card"/><span>美好生活pass卡</span></a>
						<a><van-icon name="arrow"/></a>
					</li>
					<li>
						<a><van-icon name="gem"/><span>发布小店</span></a>
						<a><van-icon name="arrow"/></a>
					</li>
					<li>
						<a><van-icon name="cart-circle"/><span>我的订单</span></a>
						<a><van-icon name="arrow"/></a>
					</li>
					<li>
						<a><van-icon name="like"/><span>收藏</span></a>
						<a><van-icon name="arrow"/></a>
					</li>
					<li>
						<a><van-icon name="send-gift"/><span>意见反馈</span></a>
						<a><van-icon name="arrow"/></a>
					</li>
					<li>
						<a><van-icon name="setting"/><span>设置</span></a>
						<a><van-icon name="arrow"/></a>
					</li>

				</ul>
			</div>
		</div>
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
		components: {
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
	.top {

		background: #fbb442;
		height: 6rem;
		position: relative
	}
	.bottom ul{
		margin-top:5rem;
	}

	ul li {
		display: flex;
		line-height: 2.5rem;
		justify-content: space-between;
		margin: 0 5%;
	}
	ul li :nth-child(1) .van-icon{
		line-height: 3rem;
		font-size: 1.2rem;
		color:#fbb442;
	}
	.shang {
		margin: 10% 5%;
		position: absolute;
		top: 10%;
		background: #FFFFFF;
		width: 90%;
		height: 8rem;
		border-radius: 10px;
		text-align: center;
		box-shadow: 0px 1px 9px 0px rgba(170, 170, 170, 1);
		border: 1px solid rgba(255, 255, 255, 0);
		
	}
	.shang img{
		position: relative;
		width: 4rem;
		height:4rem;
		border-radius: 50%;
		top: -2rem;
	}
	p {
		margin-bottom: 1rem;
		font-size: 0.75rem;
	}
</style>
