import { createContext } from 'react';

const UserContext = createContext({
  user: ["", ()=> {}],
  edge: ["", ()=> {}],
  city: ["", ()=> {}],
  
  
  
});

export default UserContext;