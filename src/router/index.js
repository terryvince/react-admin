import React,{lazy} from 'react';
import utils from '../utils/index';
import HelloWorld from '../components/HelloWorld'
const Home = lazy(()=>import(/* webpackChunkName: "pages" */ '../views/Home'));
const Login = lazy(()=>import(/* webpackChunkName: "pages" */ '../views/Login'));
const NotFound = ()=><h1>404</h1>

const routes = [
    {
        name:'login',
        title:'登录',
        path:"/login",
        component:Login
    },
    {
        name:'notFound',
        title:'404',
        path:"/404",
        component:NotFound
    },
    {
        path:"/",
        component:(props)=>(<>{props.children}布局层</>),    // 可以写个 layout 层
        children:[
            {
                name:'home',
                title:'首页',
                path:"/home",
                exact:true, 
                component:Home  
            },
            {
                name:'hello',   
                title:'测试子路由',
                path:'/hello',
                exact:true,
                component:HelloWorld,
            },
            {
                name:'home',
                title:'首页',
                path:"*",
                component:Home  
            }
        ]
    }
]

function addKey(routes){
    routes.forEach(route=>{
        route.key = utils.guid();        //生成唯一key
        if(route.children && route.children.length>0){
            addKey(route.children);
        }
    })
}
addKey(routes);

export default routes;