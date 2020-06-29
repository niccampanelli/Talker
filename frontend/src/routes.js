import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';

function Routes(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Routes;