import React, {Component} from 'react'

class Main extends Component {

  render() {
    const {header, footer, children, className} = this.props
    
    return (
      <div
        className={`main ${className}`}
        style={{
        paddingTop: header
          ? '2.2rem'
          : '0',
        paddingBottom: footer
          ? '2.5rem'
          : ''
      }}>{children}</div>
    )
  }
}

export default Main