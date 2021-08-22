import React from 'react'
import { Jega } from './testreact';

const Hello=()=>{
    // return (
    //     // <div>
    //     //     <h1>Welcome to my World</h1>
    //     // </div>
    // )
   // return React.createElement('div',null,React.createElement('h1',null,'Welcome to my World'))
   return React.createElement('div',{id:'jega',className:'jega'},React.createElement('h1',null,'Welcome to my World'))
}

export default Hello;