import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AddName from './components/Name';
import Profile from './components/Profile';
import UserContext from './context/UserContext';


function App() {

  const [user, setUser] = useState(null);
  const userData = {
    user: [user, setUser]
  }


  return (
    <div className='App-header'>
      <UserContext.Provider value={userData}>
        <Header />
        <Profile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
