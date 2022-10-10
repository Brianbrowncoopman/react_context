import React, { useContext } from 'react';
import CityContext from '../context/CityContext';
import EdgeContext from '../context/EdgeContext';
import UserContext from '../context/UserContext';


export default function Header() {

  const context = useContext(UserContext)
  const contextt = useContext(CityContext)
  const contexttt = useContext(EdgeContext)

  return (
    <div className='first'>
      <p>Hola: {context.user[0]}</p>
      <p>De la ciudad: {contextt.city[0]}</p>
      <p>{contexttt.edge[0]} años de edad</p>
    </div>
  );
}