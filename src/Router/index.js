import React from 'react';
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

// 首页
import Home from '../Containers/Home';
// 详情
import ProductDetail from '../Containers/ProductDetail'

import Cart from '../Containers/Cart'

// 登录
const Login = () => (
  <div>
    <h2>Login</h2>
  </div>
)

// 分类
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

// 用户中心
const UserCenter = () => (
  <div>
    <h2>UserCenter</h2>
  </div>
)


const confirmOrder = () => (
  <div>
    <h2>confirmOrder</h2>
  </div>
)

const NoMarch = ({location}) => (
  <div>
    <h3>No match for
      <code>{location.pathname}</code>
    </h3>
  </div>
)

export default(
  <Router>
    <div>
      <Switch>
        <Redirect exact from='/' to='/home'/>
        <Route path="/home" component={Home}/>
        <Route path="/detail/:id" component={ProductDetail}/>
        <Route path="/login" component={Login}/>
        <Route path="/category" component={Category}/>
        <Route path="/userCenter" component={UserCenter}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/confirmOrder" component={confirmOrder}/>
        <Route component={NoMarch}/>
      </Switch>
    </div>
  </Router>
);
