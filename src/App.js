import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js'
import FullName from './Component/Profile/FullName.js'
import Address from './Component/Profile/Adress.js'


function App() {
  return (
    <div className="App">
      <FullName />
      <Address />
      <ProfilePhoto className="img"/>  
    </div>
  );
}

export default App;
