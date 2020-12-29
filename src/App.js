import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {
  // Attempt to create global data
  // The reason it is global data, is because this data is going to be used in many different
  // places within the application
  const user = {
    firstName: 'Sarah',
    lastName: 'Connor',
    email: 'sarah@skynet.com',
    role: 'customer',
    friends: [
      'John Connor',
      'Kyle Reese',
    ],
  };

  // We are just pretending that this data is saved in state.
  // Usually user data will come from an API call
  const [userProfile, setUserProfile] = useState(user);

  return (
    <div className="app container">
      <Header userProfile={userProfile} />
      <div className="mainContent">
        <Switch>
          <Route exact path="/profile">
            <UserProfile userProfile={userProfile} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
