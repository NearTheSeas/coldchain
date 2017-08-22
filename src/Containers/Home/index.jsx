import React, {Component} from 'react'
import axios from 'axios'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import QuickNav from '../../Components/QuickNav'
import Slider from '../../Components/Slider'
import Main from '../../Components/Main'
import List from '../../Components/List'

import {Link} from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      hotSales: []
    }
  }

  componentWillMount() {
    axios
      .get('/api/products/hotSale?shopSign=50441b8a2a1b00b6')
      .then(res => {
        this.setState({hotSales: res.data.data})
      })
  }
  render() {
    const {hotSales} = this.state
    return (
      <div>
        <Header rightContent={< Link to = '/login' > 登录 </Link>}>
          首鲜网
        </Header>
        <Main header footer>
          <Slider/>
          <QuickNav/>
          <List listdatas={hotSales} />
        </Main>
        <Footer/>
      </div>
    )
  }
}



export default Home