import React,{Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/index';
import './App.scss';
import App from './App';
import { HashRouter as Router,Switch } from 'react-router-dom';
import MyRoute from './components/MyRoute';
import loading from './components/Loadding';
const Home = lazy(()=>import(/* webpackChunkName: "pages" */ './views/Home'));
const Login = lazy(()=>import(/* webpackChunkName: "pages" */ './views/Login'));
const NotFound = ()=><h1>404</h1>

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={loading()}>
        <Switch>
          <MyRoute name="home" title="后台管理系统" path="/" component={App} exact>
              <MyRoute name="home" title="首页" isDefault={true} path="home" component={Home} exact></MyRoute>
              <MyRoute name="login" title="登录" path="/login" component={Login} exact></MyRoute>
          </MyRoute>
          <MyRoute name="notFound" title="404" path="" component={NotFound}></MyRoute>
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root')
);