import Vue from 'vue'
import Router from 'vue-router'

import edit from '../views/edit'
import home from '../views/home'

Vue.use(Router);

export default new Router({
	routes:[
		{
			path:'/',
			name:'home',
			component: home
		},
		{
			path:'/edit',
			name:'edit',
			component:edit
		}
	]
})
