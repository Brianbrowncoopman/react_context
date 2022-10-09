import { useContext, useState }from 'react';
import UserContext from '../context/UserContext';

export default function Profile() {

  const context = useContext(UserContext);
  const { user } = context;
  const [name, setName] = user;
  

  return (
    <div>
      <h1 className='second'>Hola: {name} aqui esta tu perfil</h1>
      {/*buen dia no pude pasar el texto del input al hacer click en el boton, se pasa con el onChange del input al header y al h1 */}
      <form className='form' 
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
        <button className='btn' type="submit" onClick={() => setName()}>clear</button>
      </form>
    </div>
  );
}