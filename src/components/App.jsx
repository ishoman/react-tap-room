import Error404 from './Error404';
import React from 'react';
import { Switch, Route } from 'react-router-dom';


function App(){
  return (
    <div>
      <h1>Hello!</h1>
      <Switch>

        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
