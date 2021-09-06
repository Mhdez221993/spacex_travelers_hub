import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';
import Dragons from './components/Dragons/Dragons';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Nav />
        <Switch>
          <Route exact path="/">
            <Rockets />
          </Route>
          <Route exact path="/missions">
            <Missions />
          </Route>
          <Route exact path="/dragons">
            <Dragons />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
