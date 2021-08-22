import React, {Component} from 'react'
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'jega'
        }
    }
    
    Change(){
this.setState({
    message:'samuel'
})
}
    render(){

        return(
        <div>
            <h1>{this.state.message} are too Good</h1>
            <button onClick={()=>this.Change()}>Subscribe</button>
        </div>
        )
    }
}
export default Message;