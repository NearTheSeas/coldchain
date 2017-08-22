import React, {Component} from 'react'
// import axios from 'axios'

import Header from 'Components/Header'
import Footer from 'Components/Footer'
import Main from 'Components/Main'

import {Link} from 'react-router-dom'

class Login extends Component {
  
  render () {
    return (
      <div>
      <Header rightContent={< Link to = '/login' > 登录 </Link>}>
        首鲜网
      </Header>
      <Main header footer>
      </Main>
      <Footer/>
    </div>
    )
  }
}

export default Login