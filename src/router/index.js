import Vue from 'vue'
import Router from 'vue-router'

import park from '../views/park'
import home from '../views/home'
import operate from '../views/operate'

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/',
			name:'home',
			component: home
		},
		{
			path:'/park',
			name:'park',
			component:park
		},
		{
			path:'/operate',
			name:'operate',
			component:operate
		}
	]
})
