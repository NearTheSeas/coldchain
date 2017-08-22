import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchHotSalesIfNeeded} from 'Redux/Action'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import QuickNav from 'Components/QuickNav'
import Slider from 'Components/Slider'
import Main from 'Components/Main'
import List from 'Components/List'

import {Link} from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      hotSales: []
    }
  }

  componentWillMount() {
    const {dispatch, selectShop} = this.props
    dispatch(fetchHotSalesIfNeeded(selectShop))
  }
  render() {
    const {hotSaleItems} = this.props
    return (
      <div>
        <Header rightContent={< Link to = '/login' > 登录 </Link>}>
          首鲜网
        </Header>
        <Main header footer>
          <Slider/>
          <QuickNav/>
          <List listdatas={hotSaleItems}/>
        </Main>
        <Footer/>
      </div>
    )
  }
}

const mapStatesToProps = state => {
  const {selectShop, hotSalesByShop} = state
  const {isFetching, hotSaleItems} = hotSalesByShop[selectShop] || {
    isFetching: true,
    items: []
  }

  return {selectShop, hotSaleItems, isFetching}
}

export default connect(mapStatesToProps)(Home)