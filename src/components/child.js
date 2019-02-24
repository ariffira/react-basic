import React, { Component } from 'react';

class Child extends  Component {
   constructor(props) {
       super(props);
       this.state = {
        name: 'Md Ariful'
    }
   }
   // we could make it without below function using life-cycle method
   sendToParent = ()=> {
       //console.log(this.state.name)
       this.props.callbackFromParent(this.state.name)
   }
   render() {
       return(
           <div>
               This is Child Component with name: {this.state.name}
               <button onClick={this.sendToParent}> Get Child Name</button>
           </div>
       )
   }
}

export default Child;