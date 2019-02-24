import React from 'react';
// test state and props for functional components
const StateTest = (props)=> {
    return (
        <div>
           <h3>
               The data is coming from Parent components and data is: 
               Name: {props.dataFromState.author} ,
               Email: {props.dataFromState.email} ,
               Website: {props.dataFromState.website}  ,  
               <b>Today is: {props.dataFromState.date.toLocaleTimeString()}</b>
           </h3>
        </div>
    );
}

export default StateTest;