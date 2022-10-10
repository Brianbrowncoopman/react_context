import { useContext, useState }from 'react';
import CityContext from '../context/CityContext';
import EdgeContext from '../context/EdgeContext';
import UserContext from '../context/UserContext';

export default function Profile() {

  const context = useContext(UserContext);
  const { user } = context;
  const [name, setName] = user;

  const contextt =useContext(CityContext);
  const { city } = contextt;
  const [town, setTown] = city;

  const contexttt = useContext(EdgeContext);
  const { edge } = contexttt;
  const [years, setYears] = edge;
  

  return (
    <div className='br'>
      <div className='second'>
        <p>Hola: {name} aqui esta tu perfil</p>
        <p>de la ciudad de: {town}</p>
        <p>{edge} años de edad</p>
      </div>
{/*buen dia no pude pasar el texto del input al hacer click en el boton,
se pasa con el onChange del input automaticamente */}
      <div className='forms'>
        <form 
          className='form' 
          onSubmit={(e) => { 
          e.preventDefault();
          setName(e.target.change.user);
        }}>
          <input 
            className='input'
            autoComplete="off"
            placeholder='nombre aqui'
            type="text"
            name="user"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button className='btn' type="submit" onClick={() => setName("")}>Nombre</button>
        </form>
        <br />
{/*boton que deberia cambia ciudad*/}
        <form 
            className='form' 
            onSubmit={(e) => { 
            e.preventDefault();
            setTown(e.target.change.city);
          }}>
          <input 
            className='input'
            autoComplete="off"
            placeholder='ciudad aqui'
            type="text"
            name="city"
            value={town}
            onChange={e => setTown(e.target.value)}
          />
          <button className='btn' type="submit" onClick={() => setTown("")}>Ciudad</button>
        </form>
        <br />
{/*boton que deberia cambia edad*/}
        <form 
          className='form' 
          onSubmit={(e) => { 
          e.preventDefault();
          setYears(e.target.change.edge);
        }}>
          <input 
            className='input'
            autoComplete="off"
            placeholder='edad aqui'
            type="text"
            name="edad"
            value={years}
            onChange={e => setYears(e.target.value)}
          />
          <button className='btn' type="submit" onClick={() => setYears("")}>edad</button>
        </form>
      </div> 
    </div>
  );
}