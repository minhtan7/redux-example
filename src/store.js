import { createStore } from 'redux'

const initialState = {
  todos: [
    { id: 1, text: 'wake up', isDeleted: false },
    { id: 2, text: 'take a shower', isDeleted: false },
  ],
}
//action: object with the type {type:"addToDo",type: trimText }
// state ={
//   todos: [
//     { id: 1, text: 'wake up' },
//     { id: 2, text: 'take a shower' },
//     { id: 3, text: 'eat' },
//]}
const reducer = (state = initialState, action) => {
  if (action.type === 'addTodo') {
    return {
      todos: [
        ...state.todos,
        { id: state.todos.length + 1, text: action.payload },
      ],
    }
  }
  if (action.type === 'delete') {
    // const newArray = state.todos.filter((todo) => todo.id !== action.payload)
    const newArray = state.todos.map((todo) => {
      if (todo.id === action.payload) {
        todo.isDeleted = true
        return todo
      }
      return todo
    })
    return {
      todos: newArray,
    }
  }
  return state
}
// state ={
//   todos: [
//     { id: 1, text: 'wake up' },
//     { id: 2, text: 'take a shower' },
//     { id: 3, text: 'eat breakfast' },
//   ],
// }

const store = createStore(reducer)

export default store
