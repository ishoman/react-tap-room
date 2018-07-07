import Error404 from './Error404';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Header from './Header';



function App(){
  return (
    <div>
      <style global jsx> {`
        body {
          font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
        }
        .container {
                    max-width: 1024px;
                    margin: auto;
        }
      `}
      </style>
      <div className='container'>
        <Header/>
        <Switch>
          <Route exact path='/' component={Welcome}></Route>
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
