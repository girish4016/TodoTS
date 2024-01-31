import React, { useState } from 'react'
import './component.css'

type addTodoProps = {
  setData : React.Dispatch<React.SetStateAction<any[]>>
}



export const AddTodo = (props : addTodoProps) => {

  const handleFormUpdate = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]:e.target.value
    }))
  }

  const [formData, setFormData] = useState({
    newTodo : ""
    })

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    props.setData((previousData)=>([...previousData,{id: Date.now().toString(),todo: formData.newTodo,}]))
    setFormData({
      newTodo : ""
    })
  }

  return (
    <div>
        <h3>Add todo : </h3>
        <form onSubmit={handleSubmit}>
        <input className='Input-Box' required type="text" placeholder='enter todo here'  name = 'newTodo' value={formData.newTodo} onChange={handleFormUpdate} ></input>
        <button className='Submit-Button' type='submit' >add todo</button>
        </form>
    </div>
  )
}
