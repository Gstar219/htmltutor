import React, { Component } from 'react'


class input extends Component{
constructor(){
    super()
    this.state={
        message:'#name'
    }
}


    render (){
        return(
           <div>
               <label>Enter your Name</label>
               <input type='text' id='name'ref={(input=>this.inputdemo=input)}/>
               <button onClick={()=>this.state}>Display</button>
               <h1></h1>
           </div>
        )
    }
}
export default input;