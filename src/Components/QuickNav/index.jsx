import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import './quickNav.scss'

class QuickNav extends Component {

  render() {
    const items = [
      {
        title: '领券中心',
        style: 'circle',
        path: '/home'
      }, {
        title: '新品尝鲜',
        style: 'fresh',
        path: '/category'
      }, {
        title: '进口食品',
        style: 'importedFood',
        path: '/shopCart'
      }, {
        title: '物流查询',
        style: 'logisticsQuery',
        path: '/userCenter'
      }
    ]
    return (
      <div className="quick-nav">
        {items.map((item, index) => {
          return <Link className="quick-nav-item" key={index} to={item.path}>
            <span className={`item-img ${item.style}`}></span>
            <span className="item-text">{item.title}</span>
          </Link>
        })}
      </div>
    )
  }
}

export default QuickNav