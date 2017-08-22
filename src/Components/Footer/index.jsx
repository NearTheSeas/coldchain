import React, {Component} from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import './footer.scss'

class Header extends Component {
  render() {
    const items = [
      {
        title: '首页',
        path: '/home'
      }, {
        title: '分类',
        path: '/category'
      }, {
        title: '购物车',
        path: '/cart',
        icon: true
      }, {
        title: '我的',
        path: '/userCenter'
      }
    ]
    return (
      <div className="footer">
        {items.map((item,index) => {
          return <NavLink key={index} className="footer-item" activeClassName="active" to={item.path} >{item.title } {item.icon ? <i className="badge">{this.props.prodCount}</i>: ''} </NavLink>
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {prodCount: state.shopCart.prodCount}
}

export default  connect(mapStateToProps)(Header)