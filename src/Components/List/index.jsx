import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addProduct} from '../../Redux/Action'
import {Link} from 'react-router-dom'

import './list.scss'

class List extends Component {

  _addToCart (item) {
    this.props.addToCart(item)
  }

  render() {
    const img = require('../../images/product.jpg')
    const {listdatas} = this.props
    if(!listdatas) {
      return (<div></div>)
    }
    return (
      <div className="list-wrapper">
        <div className="list-header">主推品</div>
        <div className="list-body">
          {listdatas.map(item => {
            return (
              <div className="list-item-wrapper" key={item.id}>
                <div className="list-item">
                  <Link to={`/detail/${item.id}`}>
                    <div className="imgbox">
                      <img src={item.img} alt=""/>
                    </div>
                  </Link>
                  <div className="prod-info">
                    <span className="prod-name">{item.name}</span>
                  </div>
                  <div className="help-buy">
                    <span className="price">￥ {item.salePrice}</span>
                    <span className="add-to-cart" onClick={this._addToCart.bind(this, item)}>+</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addProduct(product))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)