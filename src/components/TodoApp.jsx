import React, { useState } from 'react'
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
import Form from './Form'

const TodoApp = () => {
  
  return (
    <div className="wrapper">
      <div className="todos">
      <Header />
      <TodosLogic />
      </div>
    </div>
  )
}

export default TodoApp