import { useState } from 'react';
import './App.css';
import Header from './components/Header';

import Profile from './components/Profile';
import UserContext from './context/UserContext';
import CityContextt from './context/CityContext';
import CityContext from './context/CityContext';
import EdgeContext from './context/EdgeContext';

function App() {

  const [user, setUser] = useState(null);
  const userData = {
    user: [user, setUser]
  }; 

  const [city, setCity] = useState(null);
  const cityData = {
    city: [city, setCity]
  };

  const [edge, setEdge] = useState(null);
  const edgeData = {
    edge: [edge, setEdge]
  }

{/*const data = { user, city }*/}


  return (
    <div className='App-header'>
      <UserContext.Provider value={userData}>
        <CityContext.Provider value={cityData}>
          <EdgeContext.Provider value={edgeData}>
            <Header />
            <Profile />
          </EdgeContext.Provider>
        </CityContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
