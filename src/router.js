import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ling',
      component: () => import( './views/ling/ling.vue'),
	  meta:{
		  icon:"location-o",
		  title:"小时光",
		  falg:true,
		  falga:false
	  }
    },
    {
      path: '/yi',
      name: 'yi',
      component: () => import( './views/yi/yi.vue'),
	  meta:{
	  		  icon:"location-o",
	  		  title:"精选",
	  		  falg:false,
			  falga:false
	  }
    },
	{
	  path: '/er',
	  name: 'er',
	  component: () => import( './views/er/er.vue'),
	  meta:{
	  		  icon:"location-o",
	  		  title:"探店`深圳",
			  tit:false,
			  icona:"search",
	  		  falg:false,
			  falga:true,
	  }

	},
	{
	  path: '/san',
	  name: 'san',
	  component: () => import( './views/san/san.vue'),
	  meta:{
	  		  icon:"location-o",
	  		  title:"",
			  icona:"cart",
	  		  falg:false,
			  falga:true
	  }

	},
	
  ]
})
