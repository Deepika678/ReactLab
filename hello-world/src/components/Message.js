import React, { Component } from 'react'


 class Message extends Component{
     constructor(){
         super()
         this.state={
             message:"Welcome Employee"
         }
     }
     changeMessage(){
         this.setState({
             message:"Thanks For Sending the Details!"

         })
     }
    render(){
        return(
            <div>
              <h1>{this.state.message}!</h1>
              <button onClick={()=>this.changeMessage()}>Submit</button>
            </div>
        ) 
    }
}

export default Message