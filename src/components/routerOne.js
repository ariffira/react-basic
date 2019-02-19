import React from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import Logout from './logout';

const RouterMain = ()=> {
   return (
     <div>
        <NavLink exact to="/home">Home Page</NavLink>
        <NavLink to="/profile">My Profile Page</NavLink>
        <NavLink to="/logout">Logout</NavLink>
        <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/logout" component={Logout}/>
        </Switch>
     </div>
   );
}

const Home = () => {
    return(
        <div>
        <h2>Home Page</h2>
        </div>
    );
}

  
const Profile = () => {
    return(
        <div>
        <h2>Profile Page</h2>
      </div>
    );
};

export default RouterMain;