import React, { useState } from 'react';
import Header from './Header';

function App() {

  let  [counter,setCounter] = useState(0);
  // use state return array 
  //Array [valor variavel, funcao de atualizacao]
  // get, set
  
  function increment(){
    setCounter(counter+1);
  
  }


  return (
    <div>
      <Header>Contador: {counter} </Header>
      <button onClick={increment}>Adicionar</button>
    </div>
  );

}

export default App;