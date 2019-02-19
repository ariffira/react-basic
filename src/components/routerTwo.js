import React from 'react';
import { Link, Route } from 'react-router-dom';

const RouterTwo = ()=> {
   return (
     <div>
        <Link exact to="/menu1">Menu 1</Link>
        <Link to="/menu2">Menu 2</Link>
        <Route exact path="/menu1" component={Menu1} />
        <Route path="/menu2" component={Menu2} />
        <Route component={NoMatch}/>
     </div>
   );
}

const Menu1 = () => {
    return(
        <div>
        <h2>Menu1 Page</h2>
        </div>
    );
}

  
const Menu2 = () => {
    return(
        <div>
        <h2>Menu2 Page</h2>
      </div>
    );
};

const NoMatch = ({location}) => {
    return <h1>404 error, This link is wrong: <code>{location.pathname}</code></h1>
}

export default RouterTwo;