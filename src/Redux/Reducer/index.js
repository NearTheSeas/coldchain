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

export const shopCart = (state = defaultState, action = {}) => {
  let {cartList, shopSign, prodCount, totalMoney} = state
  let product = action.product, item
  switch (action.type) {
    case 'ADD_TO_CART':
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
      prodCount +=1
      totalMoney = parseFloat((totalMoney - 0) + (product.salePrice- 0)).toFixed(2)
      return Object.assign({}, state, {"cartList": {...cartList}, "prodCount": prodCount, "totalMoney": Number(totalMoney)})
    case 'REMOVE_FROM_CART':
      item= cartList[shopSign][product.categoryId][product.id] 
      if(--item.num >= 0) {
        prodCount--
        totalMoney = parseFloat((totalMoney - 0) - (product.salePrice- 0)).toFixed(2)
      }
      item.num === 0 && delete cartList[shopSign][product.categoryId][product.id]
      return Object.assign({}, state, {"cartList": {...cartList}, "prodCount": prodCount, "totalMoney": Number(totalMoney)})
    default:
      return state;
  }
}
