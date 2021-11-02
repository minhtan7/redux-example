import React from 'react'
import { useDispatch } from 'react-redux'

const TodoListItem = ({ id, text }) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch({ type: 'delete', payload: id })
  }
  return (
    <div>
      {text} <button onClick={handleDelete}>X</button>
    </div>
  )
}

export default TodoListItem
