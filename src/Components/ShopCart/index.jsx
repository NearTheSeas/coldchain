import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../../Redux/Action'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'

import './shopCart.scss'

class ShopCart extends Component {
  static propTypes = {
    prodCount: PropTypes.number,
    totalMoney: PropTypes.number
  }

  render() {
    let {product, addToCart, prodCount, totalMoney} = this.props
    let btnStr = ''
    if (product) {
      btnStr = (
        <div className="buy" onClick={addToCart.bind(this, product)}>
          <span>加入购物车</span>
        </div>
      )
    } else {
      btnStr = (
        <Link to="/confirmOrder" className="buy">
          <span>去结算</span>
        </Link>
      )
    }
    return (
      <div className="shop-cart">
        <div className="cart">
          <i></i>
          <span>{prodCount}</span>
        </div>
        <div className="total-money">
          <span>￥{totalMoney}</span>
        </div>
        {btnStr}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {cartList: state.shopCart.cartList, shopSign: state.shopCart.shopSign, prodCount: state.shopCart.prodCount, totalMoney: state.shopCart.totalMoney}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addProduct(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShopCart)