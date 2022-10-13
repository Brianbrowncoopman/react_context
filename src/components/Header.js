import React, { useContext } from 'react';
import UserContext from '../context/UserContext';


export default function Header() {

  const context = useContext(UserContext);
  

  return (
    <div className='first'>
      <p>Hola: {context.user}</p>
      <p>De la ciudad: {context.city}</p>
      <p>{context.edge} años de edad</p>
    </div>
  );
}