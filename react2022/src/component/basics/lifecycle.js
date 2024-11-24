import React, { Component } from 'react';

export default class Lifecycle extends Component {
    //constructor called when component is created.

    constructor(props) {
        console.log('constructor');
        super(props)

        this.state = {
            counter: 0,
            seed: 0
        }

        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }
    //getDerivedStateFromProps, it allows us to copy prop into states.
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps ')
        console.log('------------------')
        if (props.seed && state.seed != props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }
    //componentDidMount, for initial loading or network call
    componentDidMount() {
        console.log('componentDid Mount')
        console.log('------------------')
    }
    //shouldComponentUpdate, it called when we dont need to re-render again n again.
    shouldComponentUpdate(nextProps, nextStates) {
        console.log('Should component Update')
        console.log('------------------')
        if (nextProps.ignoreProps && this.state.ignoreProps !== nextProps.ignoreProps) {
            return false
        }
        return true
    }
    //getSnapshotBeforeUpdate, it is uses to store position like positions of list view and then we can pass that snap to 
    //component did update and reassign those afet re-render.
getSnapshotBeforeUpdate(prevProps, prevStates){
    console.log('getSnapshotBeforeUpdate')
    console.log('------------------')
    return null
}

    render() {
        console.log('render');
        return (
            <div>
                Counter: {this.state.counter}
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        );
    }
    //componentDidUpdate, it is like componentDid update,but it does not called render method twice
    componentDidUpdate(prevProp, prevState, snapshot) {
        console.log('componentDid Update');
        console.log('------------------');
    }
//componentWillUnmount, it is called when component removed from the DOM.
    componentWillUnmount() {
        console.log('componentWill Unmount');
        console.log('------------------');
    }
    //componentDidCatch, it help to gracefully handle the error in components.
    
    componentDidCatch(err, info){
        console.log('componentDidCatch');
        console.log('------------------');
    }
}
