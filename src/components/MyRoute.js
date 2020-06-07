import React from 'react';
import { Route, Redirect,Switch } from 'react-router-dom';
import store from '../store';

const whiteList = ['login','notFound']; //路由白名单

const MyRoutes = (props)=>{
    const {isLogin} = store.getState();
    const routes = props.routes;
    return (
            <Switch>{
                routes.map(routeConfig=>{
                    const {children,component:Component,...config} = routeConfig;
                    if(whiteList.includes(config.name) || isLogin){    // 白名单，已登录放行
                        return (
                            <Route {...config} render={(routeProps)=>{
                                document.title = config.title;
                                return Component?
                                    <Component {...config} {...routeProps}>
                                        {children && children.length>0 && <MyRoutes routes={children}></MyRoutes>}
                                    </Component>:
                                    (children && children.length>0 && <MyRoutes routes={children}></MyRoutes>)
                            }}></Route>
                        );
                    }
                    return <Redirect key="login" to="/login" />
                })
            }</Switch>
        )
}

export default MyRoutes;