import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function Header() {

  const context = useContext(UserContext)

  return (
    <div className='first'>
      <h1>Hola: {context.user[0]}</h1>
    </div>
  );
}