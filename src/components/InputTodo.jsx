import React, { useState } from 'react'

const InputTodo = ({ addTodoItem }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title.trim()){
      addTodoItem(title);
      setTitle('');
    } else {
      setMessage('Please add an item.');
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
      <input type="text" className="input-text" value={title} onChange={handleChange} placeholder="Add Todo..." />
      <button className="input-submit">Submit</button>
    </form>
    <span className="submit-warning">{message}</span>
    </>
  )
}

export default InputTodo