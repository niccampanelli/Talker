import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Authenticate from './screens/Authenticate';

function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/auth" exact component={Authenticate}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;