import React, {Component} from 'react'
import axios from 'axios'

import './productDetail.scss'
import Header from '../../Components/Header'
import Main from '../../Components/Main'
import ShopCart from '../../Components/ShopCart'

import {Link} from 'react-router-dom'

class ProducrtDetail extends Component {
  constructor() {
    super()
    this.state = {
      product: ''
    }
  }

  componentWillMount() {
    const {id} = this.props.match.params
    axios
      .post('/api/products/detail', {id})
      .then(res => {
        this.setState({product: res.data.data})
      })
  }

  render() {
    const prodct = this.state.product
    return (
      <div>
        <Header leftContent="back" rightContent={< Link to = '/login' > 登录 </Link>}>
           {prodct.name}
        </Header>
        <Main header footer className="prod-detail">
          <div className="img-area">
            <img src={prodct.img} alt=""/>
          </div>
          <p className="prod-name">
            {prodct.name}
          </p>
          <div className="prod-detail">
            <p>售价：{prodct.salePrice}</p>
            <p>单位：{prodct.unit}</p>
            <p>规格：{prodct.specification}</p>
            <p>条码：{prodct.barcode}</p>
          </div>
          <div
            className="detail"
            dangerouslySetInnerHTML={{
            __html: prodct.detail
          }}></div>
        </Main>
        <ShopCart product={prodct}/>
      </div>
    )
  }
}

export default ProducrtDetail