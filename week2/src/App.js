import React from 'react';
import './App.css';
import Welcome from './components/welcome';
import Profile from './components/profile';
import Counter from './components/Counter';
import NameForm from './components/NameForm';

function App() {
  return (
    <div className="App">
      <Welcome />
      <Profile name="kuriyan john" age={22} role="developer"/>
      <Counter/>
      <NameForm/>
    </div>
  );
}

export default App;
