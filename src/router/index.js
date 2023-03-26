import Vue from 'vue'
import Router from 'vue-router'

import park from '../views/park'
// import home from '../views/home'
import operate from '../views/operate'
import room from '../views/room'
import mobile from '../views/mobile'
import mpark from '../views/mpark'
import mroom from '../views/mroom'

Vue.use(Router);

export default new Router({
	routes:[
		// {
		// 	path:'/',
		// 	name:'home',
		// 	component: home
		// },
		{
			path:'/park',
			name:'park',
			component:park
		},
		{
			path:'/operate',
			name:'operate',
			component:operate
		},
		{
			path:'/room',
			name:'room',
			component:room
		},
		{
			path: '/',
			name: 'mobile',
			component: mobile
		},
		{
			path: '/mpark',
			name: 'mpark',
			component: mpark
		},
		{
			path: '/mroom',
			name: 'mroom',
			component: mroom
		}
	]
})
