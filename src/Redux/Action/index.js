export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addProduct = product => {
  return {
    type: ADD_TO_CART,
    product
  }
}

export const removeProduct = product => {
  return {
    type: REMOVE_FROM_CART,
    product
  }
}