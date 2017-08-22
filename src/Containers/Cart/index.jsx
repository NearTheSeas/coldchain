import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addProduct, removeProduct} from 'Redux/Action'

import Header from 'Components/Header'
import Main from 'Components/Main'
import ShopCart from 'Components/ShopCart'
import './cart.scss'

class Cart extends Component {

  _add (prod) {
    this.props.addToCart(prod)
  }

  _minus (prod) {
    this.props.removeProduct(prod)
  }
  render () {
    const {cartList, shopSign} = this.props
    let shop = cartList[shopSign]
    let prods = [],listStr
    if(shop) {
      Object.keys(shop).forEach((key) => {
        let category = shop[key] 
        Object.keys(category).forEach((pid) => {
          prods.push(category[pid])
        });
      })
      listStr = prods.map(prod => {
        return (<CartItem key={prod.id} item={prod} addNum={this._add.bind(this)} minusNum={this._minus.bind(this)}></CartItem>)
      })
    }

    return (
      <div>
         <Header leftContent="back" rightContent={<Link to = '/login' > 登录 </Link>}>
           购物车
        </Header>
        <Main header footer className="cart-list-wrapper">
        {listStr}
        </Main>
        <ShopCart/>
      </div>
    )
  }
}

class CartItem extends Component {
  render () {
    const {item, addNum, minusNum} = this.props
    return (
      <div className="cart-list-item">
        <div className="img-wrapper">
          <img src={item.img} alt=""/>
        </div>
        <div className="desc-wrapper">
          <div className="desc-head">{item.name}</div>
          <div className="desc">
            <div className="price">￥ {item.salePrice}</div>
            <div className="cart-btns">
              <span onClick={minusNum.bind(this, item)}>-</span>
              <span>{item.num}</span>
              <span onClick={addNum.bind(this, item)}>+</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {cartList: state.shopCart.cartList, shopSign: state.shopCart.shopSign, }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addProduct(product))
    },
    removeProduct: (product) => {
      dispatch(removeProduct(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
