import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import store from '../store';

const MyRoute = (props)=>{
  const whiteList = ['login','notFound']; //路由白名单
  const {name,title} = props;
    const {isLogin} = store.getState();
    document.title = title;
    if(whiteList.includes(name) || isLogin){      //如果是已登录或者是白名单列表允许访问
        return <Route {...props} />
    }else{
        return <Redirect to="/login" />
    }
}

export default MyRoute;