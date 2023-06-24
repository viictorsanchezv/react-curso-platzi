//cuando empieza en mayuscula es un componente
//cuando empieza en minuscula es un custom hook generalmente es useLoQueSea
//en minuscula por lo general tambien es function
import React from 'react';
import './App.css';
import { AppUI } from "./AppUI.js";
import { TodoProvider } from '../TodoContext';

function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}
export default App;