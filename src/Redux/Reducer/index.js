import {
  SELECT_SHOP,
  INVALIDATE_SHOPSIGN,
  REQUEST_HOTSALES,
  RECEIVE_HOTSALES,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from 'Redux/Action'
import {combineReducers} from 'redux'

let defaultState = {
  "shopSign": '50441b8a2a1b00b6',
  "token": '',
  "shopName": '',
  "customerName": '',
  "isMC": false,
  "tempShopSign": '',
  "currentAgent": 'wap',
  "cartList": {},
  "prodCount": 0,
  "totalMoney": 0
}

const selectShop = (state = '50441b8a2a1b00b6', action = {}) => {
  switch (action.type) {
    case SELECT_SHOP:
      return action.shopSign
    default:
      return state
  }
}

const hotSales = (state = {
  isFetching: false,
  didInvalidate: false,
  hotSaleItems: []
}, action = {}) => {
  switch (action.type) {
    case INVALIDATE_SHOPSIGN:
      return {
        ...state,
        didInvalidate: true
      }
    case REQUEST_HOTSALES:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case RECEIVE_HOTSALES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        hotSaleItems: action.hotSaleItems,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }
}

const hotSalesByShop = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SHOPSIGN:
    case REQUEST_HOTSALES:
    case RECEIVE_HOTSALES:
      return {
        ...state,
        [action.shopSign]: hotSales(state[action.shopSign], action)
      }
    default:
      return state
  }
}

const shopCart = (state = defaultState, action = {}) => {
  let {cartList, shopSign, prodCount, totalMoney} = state
    let product = action.product,
      item
    switch (action.type) {
      case ADD_TO_CART:
        let shop = cartList[shopSign] = (cartList[shopSign] || {}) // 店铺
        let category = shop[product.categoryId] = (shop[product.categoryId] || {}) // 二级分类
        item = category[product.id] = (category[product.id] || {}) //

        if (item.num) {
          item['num']++;
        } else {
          item = {
            ...product,
            num: 1
          };
        }
        cartList[shopSign][product.categoryId][product.id] = item
        prodCount += 1
        totalMoney = parseFloat((totalMoney - 0) + (product.salePrice - 0)).toFixed(2)
        return Object.assign({}, state, {
          "cartList": {
            ...cartList
          },
          "prodCount": prodCount,
          "totalMoney": Number(totalMoney)
        })
      case REMOVE_FROM_CART:
        item = cartList[shopSign][product.categoryId][product.id]
        if (--item.num >= 0) {
          prodCount-- 
          totalMoney = parseFloat((totalMoney - 0) - (product.salePrice - 0)).toFixed(2)
        }
        item.num === 0 && delete cartList[shopSign][product.categoryId][product.id]
        return Object.assign({}, state, {
          "cartList": {
            ...cartList
          },
          "prodCount": prodCount,
          "totalMoney": Number(totalMoney)
        })
      default:
        return state;
    }
  }

  export default combineReducers({selectShop, hotSalesByShop, shopCart})
