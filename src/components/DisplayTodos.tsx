import React from 'react'
import './component.css'


type todoProps = {
  data : any[],
  setData : React.Dispatch<React.SetStateAction<any[]>>
}


export const DisplayTodos = (props:todoProps) => {

  const handleDeleteTodo = ( todoId : string ) => {
    props.setData(props.data.filter( (it:any) => it.id!==todoId ))
  }
 
  return (
    <div className='All-Todos-Container' >
    {
      props.data.map((todo)=>(
      <h6 onClick={()=>handleDeleteTodo(todo.id)} key={todo.id}
      style={{border:"2px solid black" }}
      >{todo.todo}</h6>
      ))
    }
    
    </div>
  )
}
