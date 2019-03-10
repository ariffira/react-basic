import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Logout from './logout';

class RouterMain extends Component {
    constructor() {
        super();
        this.state = {
            view: 0,
            isLoading: false
        }
    }
    updateView = (newData)=> {
        this.setState((prevState)=> {
           return {
             view: prevState + newData,
           }
        });

    }
    render(){
        return (
            <div>
               <NavLink to="/home">Home Page. View: {this.state.view}</NavLink>
               <NavLink to="/profile">My Profile Page</NavLink>
               <NavLink to="/logout">Logout</NavLink>
               <Switch>
                   <Route path="/home" component={()=><Home updateHandler={this.updateView}/>} />
                   <Route path="/profile" component={Profile} />
                   <Route path="/logout" component={Logout}/>
               </Switch>
            </div>
          );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newData: 10,
            isLoading: false
        }
    }
/*     sendDataToMain = ()=> {
        this.props.updateHandler(this.state.newData)
    } */
    componentDidMount() {
        this.setState({isLoading:true});
        if(this.state.isLoading) {
            this.props.updateHandler(this.state.newData)
        }
    }
    render() {
        return(
            <div>
            <h2>Home Page</h2>
            </div>
        );
    }
}

  
const Profile = () => {
    return(
        <div>
        <h2>Profile Page</h2>
      </div>
    );
};

export default RouterMain;