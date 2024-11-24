import React, { Component } from 'react'
import Lifecycle from './lifecycle'

export default class LifecycleSupport extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      mount: true
    }
  
    this.mountCounter=()=>this.setState({mount: true})
    this.mountCounter=()=>this.setState({mount: true})
  }  
  render() {
      return (
        <div>
          <button onClick={mount}>Mount</button>
          <button onClick={unmount}>UnMount</button>
          <hr/><hr/>
          <Lifecycle/>
        </div>
      );
}
}
