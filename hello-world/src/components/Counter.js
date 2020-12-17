import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    IncrementCounter(){
        this.setState(
            {
            count: this.state.count+5
        },
        ()=>{
            console.log(this.state.count)
        }
        )
        
    }
    
    render() {
        return (
            <div>
                <div>Count={this.state.count}</div>
                <button onClick={() =>{this.IncrementCounter()}}>Submit</button>
                
            </div>
        )
    }
}

export default Counter
