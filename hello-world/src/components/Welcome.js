import React, { Component } from 'react'


 class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name}!</h1>;
    }
}

export default Welcome

/*
const Welcome = props => <h1> Welcome, {props.name} !</h1>

*/
