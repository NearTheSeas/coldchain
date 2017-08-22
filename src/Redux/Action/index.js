import axios from 'axios'

export const SELECT_SHOP = 'SELECT_SHOP'
export const INVALIDATE_SHOPSIGN = 'INVALIDATE_SHOPSIGN'

export const REQUEST_HOTSALES = 'REQUEST_HOTSALES'
export const RECEIVE_HOTSALES = 'RECEIVE_HOTSALES'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const selectShop = shopSign => ({type: SELECT_SHOP, shopSign})

export const invalidateReddit = shopSign => ({type: INVALIDATE_SHOPSIGN, shopSign})

export const requestHotSales = (shopSign) => ({type: REQUEST_HOTSALES, shopSign})

export const receiveHotSales = (shopSign, hotSaleItems) => ({
  type: RECEIVE_HOTSALES,
  shopSign,
  hotSaleItems,
  receivedAt: Date.now()
})

const fetchHotSales = shopSign => dispatch => {
  dispatch(requestHotSales(shopSign))
  return axios
    .get('/api/products/hotSale', {params: {
      shopSign
    }})
    .then(res => {
      dispatch(receiveHotSales(shopSign, res.data.data))
    })
}

const shouldFetchHotSales = (state, shopSign) => {
  const hotSales = state.hotSalesByShop[shopSign]
  if(!hotSales) {
    return true
  }
  if(hotSales.isFetching) {
    return false
  }
  return hotSales.didInvalidate
}

export const fetchHotSalesIfNeeded = shopSign => (dispatch, getState) => {
  if(shouldFetchHotSales(getState(), shopSign)){
    dispatch(fetchHotSales(shopSign))
  }
}

export const addProduct = product => {
  return {type: ADD_TO_CART, product}
}

export const removeProduct = product => {
  return {type: REMOVE_FROM_CART, product}
}