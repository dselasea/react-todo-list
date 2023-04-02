import React, { useState } from 'react'
import Header from '@/components/Header'
import TodosLogic from '@/components/TodosLogic'
import Navbar from '@/components/Navbar'
import Modal from '@/components/Modal'
import Form from './Form'

const TodoApp = () => {
  
  return (
    <div>
      <Navbar />
      <Header />
      <TodosLogic />
    </div>
  )
}

export default TodoApp