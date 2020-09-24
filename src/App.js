import React from 'react';
import './App.scss';
import Signup from './Signup';
import logo from './bobble.jpg';

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo} alt="Logo" />
      <Signup />
    </div>
  );
}

export default App;
