import { React, useState } from 'react';

export default function AddName() {
    const [nombre, setNombre] = useState('');

    function handleSubmit (event) {
        event.preventDefault ();
        const name = event.target.elements.name;
        console.log (name)
        
    }

    return (
        <form 
            onSubmit={e =>{e.preventDefault();
            {/*setNombre(e.target.change.value);>*/}
            console.log(e.target.change.value);}}>

            <input autoComplete="off" type="text" name="change" />
            <button type="submit">cargar nombre</button>
            <p>{nombre}</p>
        </form>
    );
}