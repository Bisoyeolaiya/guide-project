import React from 'react';
import Appone from './chartone';
import Apptwo from './chart_two';
import { Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path="/chartone" component={Appone} />
        <Route path="/chart-two" component={Apptwo} />
        <Route path="/" component={Appone} />
    </Switch>
)

export default Main;