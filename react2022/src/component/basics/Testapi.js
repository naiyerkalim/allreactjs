import React, {useState, useEffect} from 'react'
import axios from 'axios';


const Testapi = () => {
    const [todos, setTodos]= useState([]);
    const [todoperpage, setTododperpage]= useState(10)
    const numberofTotalPages= Math.ceil(todos.length/todoperpage)

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>setTodos(res.data))
  },[])
  return (
    <div>
        {todos.map((todo)=>(
        <p key= {todo.id}> {todo.title}</p>
        ))}
        <h1>{numberofTotalPages}</h1>
        </div>
  )
}

export default Testapi