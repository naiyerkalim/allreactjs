import React from "react";
class User extends React.Component{

    constructor(props){
        super(props)
        this.state={count:0}

    }
    onIncrement=()=>{
        this.setState({count: this.state.count +1})
    }
    render(){
        
        //console.log(React);
       const { userName }= this.props;
        return(
            <>
            <h1>Welcome {userName}</h1>
            <h2>Count: {this.state.count}</h2>
            <button onClick={this.onIncrement}>Increment</button>
            </>
        )
    }
}

export default User;