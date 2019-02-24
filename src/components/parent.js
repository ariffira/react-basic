import React, { Component } from 'react';
import Child from '../components/child';

class Parent extends  Component {
   constructor(props) {
       super(props);
       this.state = {
        parent_last_name: 'Islam',
        child_name: 'unknown'
       }
   }
   getChildData = (dataFromChild)=> {
        //console.log(dataFromChild)
        this.setState(()=> {
            return {
               child_name: dataFromChild
            }
        });
   }
   render() {
       return(
           <div>
               This is Parent Component
               <Child callbackFromParent={this.getChildData}/>
               Child Fullname is: 
               {this.state.child_name} {this.state.parent_last_name}
           </div>
       )
   }
}

export default Parent;