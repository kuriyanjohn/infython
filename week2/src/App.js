import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Profile name="kuriyan john" age={22} role="developer"/>
    </div>
  );
}

export default App;
