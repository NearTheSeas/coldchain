import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './header.scss'

class Header extends Component {
  static propTypes = {
    leftContent: PropTypes.string,
    rightContent: PropTypes.object
  }
  
  render() {
    const {leftContent} = this.props;
    return (
      <div className="header">
        { leftContent && leftContent === 'back' ?  <div className="header-left" onClick={() => window.history.back()}><i className="back"></i></div> : <div className="header-left"></div> }
        <div className="header-title">{this.props.children}</div>
        <div className="header-right">
          {this.props.rightContent}
        </div>
      </div>
    )
  }
}

export default Header