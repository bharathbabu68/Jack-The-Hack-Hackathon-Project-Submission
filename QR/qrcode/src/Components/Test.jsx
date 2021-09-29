import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
 
class Test extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      result: 'No result'
    }

  }
 
 
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }

  check()
  {
    if(this.state.result!="No result")
    this.props.clickk(this.state.result);
  }

  render() {
    return (
      <div>
        <QrReader
          delay={100}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ marginLeft:"30px" },{width:"20%"}}
         
        />
        
        {this.check()}
      </div>
    )
  }
}
export default Test;