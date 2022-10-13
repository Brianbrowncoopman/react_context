import { useContext, useState, }from 'react';
import UserContext from '../context/UserContext';

export default function Profile() {

  const context = useContext(UserContext);
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");
  const [edge, setEdge] = useState("");
  
  

  return (
    <div className='br'>
      <div className='second'>
        <p>Hola: {context.user} aqui esta tu perfil</p>
        <p>de la ciudad de: {context.town}</p>
        <p>{context.edge} años de edad</p>
        <p>{context.name} tienes: {context.edge} y vives en {context.town}</p>
      </div>
{/*buen dia no pude pasar el texto del input al hacer click en el boton,
se pasa con el onChange del input automaticamente */}
      <div className='forms'>
        <form className='form'>
          <input 
            className='input'
            autoComplete="off"
            placeholder=' Nombre aqui'
            type="text"
            name="user"
            
            
          />
          <button className='btn' type="submit" onClick={() => setUser("")}>Nombre</button>
        </form>
        <br />
{/*boton que deberia cambia ciudad*/}
        <form className='form' >
          <input 
            className='input'
            autoComplete="off"
            placeholder=' Ciudad aqui'
            type="text"
            name="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          />
          <button className='btn' type="submit" onClick={() => setCity("")}>Ciudad</button>
        </form>
        <br />
{/*boton que deberia cambia edad*/}
        <form className='form' >
          <input 
            className='input'
            autoComplete="off"
            placeholder=' Edad aqui'
            type="text"
            name="edad"
            value={edge}
            onChange={e => setEdge(e.target.value)}
          />
          <button className='btn' type="submit" onClick={() => setEdge("")}>Edad</button>
        </form>
      </div> 
    </div>
  );
}