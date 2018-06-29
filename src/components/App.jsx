import Error404 from './Error404';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Header from './Header';
import Employee from './Employee';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Welcome}></Route>
        <Route path='/employee' component={Employee}></Route>
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
