import logo from './logo.svg';
import './App.css';
import react, { useEffect, useState } from 'react';




function App() {
 const url = 'https://jsonplaceholder.typicode.com/todos'
 const[todos, settodos] = useState()
 const fetchApi = async () => {
   const response = await fetch(url)
   const responseJSON = await response.json()
   settodos(responseJSON)
 }
useEffect(() => {
  fetchApi()
},[])

  return (
    
    <div className="App">
      Lista de tareas para el dia.
      <ul>
        { !todos ? 'cargando...' :
        todos.map( (todo,index)=>{
        return <li key={index}>{todo.title} {todo.completed ?'♥♥♥♥♥♥♥♥♥♥' : '¯\_(ツ)_/¯'}</li>
        })

        }
      </ul>
    </div>
      
  );
      
}

export default App;
