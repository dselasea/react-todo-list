import React, { useState } from 'react'
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'

const TodoApp = () => {
  
  return (
    <div>
      <Navbar />
      <h1>Hello world</h1>
      <p>I am in a react component</p>
      <Header />
      <TodosLogic />
      <Modal />
    </div>
  )
}

export default TodoApp