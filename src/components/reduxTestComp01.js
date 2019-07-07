import React, { Component } from 'react';
// connect() will connect redux store with components 
import { connect } from "react-redux";
// add some action function name
import { getFullName } from "../actions/userAction";

class ReduxTestComp01 extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    // action function to change name
    changeName = (data)=> {
        // by default component can dispatch() any action by this.props.dispatch({})
        this.props.dispatch({
            type: 'CHANGE_NAME',
            payload: data
        }) 
    }
    fullname = ()=> {
        this.props.getFullName('Islam');
    }
    render() { 
        return (  
            <>
             Redux Test 
             <br/>
             <h1>User Data</h1>
             {/** get state from store using props */}
             <h2>Name: {this.props.user.name}</h2>
             <h2>Age: {this.props.user.age}</h2>
             <h2>Full Name: {this.props.user.fullname}</h2>
             {/** dispatch way 01 */}
             <button onClick={()=> this.changeName('Arif')}>changeName</button>
             {/** dispatch way 02 */}
             <button onClick={()=> this.props.dispatch({type: 'INC_AGE'})}>incrementAge</button>
             {/** dispatch way 03 */}
             <button onClick={this.fullname}>Get Full-Name</button>
            </>
        );
    }
}

/**
 * mapState/mapStateToProps 
 * first argument for connect()
 * map the states for components from store, called on state change
 * receives: entire states from store like all reducers data also
 * return: an object of data components need
 * parameters: state, ownprops
 */
const mapState = state=> {
    console.log(state)
    return{
        user: state.user // from all store state only receive user reducer states
    }
}
/**
 * mapDispatch/mapDispatchToProps
 * second argument for connect()
 * dispatch action to store,  only way to trigger a state change
 * parameters: dispatch, ownProps
 */
const mapDispatch = dispatch => {
  return {
  }
} 
//when no subscribe with store: use null/undefined replacing mapState
// connect(null, undefined) (component)
export default connect(mapState, null)(ReduxTestComp01);