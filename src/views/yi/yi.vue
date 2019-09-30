<template>
	<div class="about">

		<Header />
		<div class="box">
			<div class="top">
				<van-row>
					<van-col span="24">
						<van-row>
							<van-col span="18"><a>趣周末</a></van-col>
							<van-col span="6">span: 12</van-col>
						</van-row>
					</van-col>
					<van-col span="24">
						<van-row>
							<van-col span="18"><a>趣周末</a></van-col>
							<van-col span="6">span: 12</van-col>
						</van-row>
					</van-col>
					<van-col span="24">
						<van-row>
							<van-col span="18"><a>趣周末</a></van-col>
							<van-col span="6">span: 12</van-col>
						</van-row>
					</van-col>
				</van-row>
			</div>
			<div class="bottom">
				<p class="biao">不错过的小时光</p>
				<van-col span="24">
					<div class="swiper-container">
						<div class="swiper-wrapper">
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
							<div class="swiper-slide"><a><img src="../../../public/img/cnxh.jpg"></a>
								<p>成都必游景点</p>
							</div>
						</div>
					</div>

				</van-col>
			</div>
		</div>
	</div>
</template>
<script>
	import Header from '../header/index.vue'


	export default {
		data() {
			return {}
		},
		components: {

			Header
		},
		created() {
			// this.dianji()
		},
		mounted() {

			new Swiper('.swiper-container', {
				slidesPerView: 3,
				spaceBetween: 20, //间距
				freeMode: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			})

		},
		methods: {


		}
	}
</script>
<style scoped="scoped">
	.box {
		margin: 5%;
	}

	.top>.van-row>.van-col {
		margin-bottom: 5%;
		line-height: 7rem;
		box-shadow: 0px 1px 5px 0px rgba(170, 170, 170, 1);
		border: 1px solid rgba(255, 255, 255, 0);
		background: red;
		border-radius: 10px;

	}

	.zy {
		display: flex;
		justify-content: space-between;
	}

	ul li img {
		width: 5rem;
		height: 5rem;
	}

	.bottom {
		margin-bottom: 15rem;
	}

	.swiper-slide {
		 margin:0 5%; 
		line-height: 20px;
		border-radius: 10px;
		text-align: center;
		border: 1px solid rgba(255, 255, 255, 0);
	}

	.swiper-slide img {
		width: 6.875rem;
		height: 6.875rem;
		border-radius: 10px;
	}
	.biao {
		line-height: 2rem;
		font-size: 1rem;
	}
</style>
