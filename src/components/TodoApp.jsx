import React from 'react'
import Navbar from '../Navbar'
import Header from './Header'
import TodosLogic from './TodosLogic'

const TodoApp = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <TodosLogic />
    </React.Fragment>
  )
}

export default TodoApp