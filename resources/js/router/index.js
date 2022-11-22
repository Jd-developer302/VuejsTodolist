import { createRouter , createWebHistory } from 'vue-router';

//admin
import homeAdminIndex from '../components/admin/home/index.vue'


//Pages
import homePageIndex from '../components/pages/home/index.vue'

//productNew
import productNew from '../components/admin/home/new.vue'
import productEdit from '../components/admin/home/edit.vue'
//login

import login from '../components/auth/login.vue'
//Register


import register from '../components/auth/register.vue'


//notFound
import notFound from '../components/notFound.vue'



const routes =[
//admin
{
    path:'/admin/home',
    name:'adminHome',
    component:homeAdminIndex,
    meta:{
        requiresAuth:true
    }
},
{
    path:'/product/new',
    component:productNew
},
{
    path:'/product/edit/:id',
    component:productEdit,
    props:true
},
//Pages
{
    path:'/',
    name:'Home',
    component:homePageIndex,
    meta:{
        requiresAuth:false
    }
},
// productNew

//Login
{
    path:'/login',
    name:'Login',
    component:login,
    meta:{
        requiresAuth:false
    }
},
//register
{
    path:'/register',
    name:'Register',
    component:register,
    meta:{
        requiresAuth:false
    }
},

//notFound
{
    path:'/:pathMatch(.*)*',
    component:notFound
}
]


const router= createRouter ({
    history : createWebHistory(),
    routes,
})


router.beforeEach((to , from)=>{
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return {name: 'Login'}
    }
    if(to.meta.requiresAuth == false && localStorage.getItem('token')){
        return {name: 'adminHome'}
    }
})

router.beforeEach((to , from)=>{
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return {name: 'Register'}
    }
    if(to.meta.requiresAuth == false && localStorage.getItem('token')){
        return {name: 'adminHome'}
    }
})

export default router
