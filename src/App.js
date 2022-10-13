import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import UserContext from './context/UserContext';


function App() {

  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const [edge, setEdge] = useState("");
  const data = { user, setUser, city, setCity, edge, setEdge };


  return (
    <div className='App-header'>
      <UserContext.Provider value={data}>
        <Header />
        <Profile />  
      </UserContext.Provider>
    </div>
  );
}

export default App;
