import React,{lazy} from 'react';
import utils from '../utils/index';
// import HelloWorld from '../components/HelloWorld'
const Home = lazy(()=>import(/* webpackChunkName: "pages" */ '../views/Home'));
const Login = lazy(()=>import(/* webpackChunkName: "pages" */ '../views/Login'));
const NotFound = ()=><h1>404</h1>

const routes = [
    {
        name:'home',
        title:'首页',
        exact:true,
        path:"/",
        component:Home
    },
    {
        name:'home',
        title:'首页',
        path:"/home",
        component:Home  
    },
    {
        name:'login',
        title:'登录',
        exact:true,
        path:"/login",
        component:Login
    },
    {
        name:'notFound',
        title:'404',
        path:"",
        component:NotFound
    }
]

routes.forEach(route=>{
    route.key = utils.guid();        //生成唯一key
})

export default routes