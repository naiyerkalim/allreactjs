import React, { Component } from 'react'
import Header from './redux-saga/components/Header'
import Main from './redux-saga/components/Main'
import UseState from './component/hooks/UseState'
import './App.css'
import UseEffect from './component/hooks/UseEffect'
import LoginForm from './component/hooks/LoginForm'
import { UseEffectApi } from './component/hooks/useEffect/UseEffectApi'
import { UseRef } from './component/hooks/UseRef'
import UseReducer from './component/hooks/UseReducer'
import UseContext01 from './component/hooks/useContext/UseContext01'
import Lifecycle from './component/basics/lifecycle'
import { UseRefNew } from './component/UseRefNew'
import FetchApi from './component/basics/FetchApi'
import FormInput from './component/form/FormInput'


export default class App extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      mount: true,
      ignoreProps:0,
      seed:40
    }
    this.mountCounter = () => this.setState({mount: true})
    this.unmountCounter = () => this.setState({mount: false})
    this.ignoreProps= () => this.setState({ignoreProps: Math.random()})
    this.seedGenerator=()=> this.setState({seed: Number.parseInt(Math.random() * 100)})
  }  
  render() {

    return (
      <div className='App'>
      
      
      {/* <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
      <button onClick={this.unmountCounter} disabled={!this.state.mount}>unMount</button>
      <button onClick={this.ignoreProps}>Ignore Props</button>
      <button onClick={this.seedGenerator}>Seed Generator</button>

      {this.state.mount?<Lifecycle ignoreProps={this.state.ignoreProps} 
      seed={this.state.seed}/>: null} */}
      </div>
    )
  }
}
