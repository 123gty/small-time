<template>
		<div class="kaiotu">
		<header>
			<a id="time" v-html="shijian"></a>
		</header>
	</div>
</template>

<script>
	function dateToString(date){
    
    var weekArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
    
    var str = "";
    var y = date.getFullYear();
    var m = date.getMonth()+1; //y/m/d hh:MM:ss
    var d = date.getDate();
    var h = date.getHours();
    var M = date.getMinutes();
    var s = date.getSeconds();
    var w = date.getDay();//0-6
    
    //str += y + "年" + getDb(m) + "月" + getDb(d) + "日 ";
    str += getDb(h) + ":" + getDb(M) + ":" + getDb(s) + " ";
    //str += weekArr[w];
    return str;//2019年03月28日 15:37:02 星期四
}
function getDb(num){
    //num是个位数的时候前面加0
    return num < 10 ? 0 + "" + num : num;
}
	export default {
		data(){
			return {
				shijian:dateToString(new Date())
			}
		},
		created() {
				this.dongtai()
		},
		methods:{
		
			dongtai(){
				setInterval(()=> {
					var date = new Date();
					this.shijian = dateToString(date)
					 // console.log( dateToString(date))
				}, 1000)
			}
		}
	}
</script>

<style>
	.kaiotu {
		/* position: fixed;
		width: 100%;
		top: 0; */
		background: #ededed;
		z-index: 10;
		
	}
	
	header {
	
		height: 2rem;
		background: url(../../../public/afds.jpg) no-repeat;
		background-size: 100% 100%;
	
	}
	
	header a {
		/* position: absolute; */
		text-align: center;
		width: 100%;
		
		font-weight: 540;
		font-size: 1rem;
		line-height: 2rem;
		color: #FFFFFF;
		opacity: .8;
	
	}
	
	
</style>
