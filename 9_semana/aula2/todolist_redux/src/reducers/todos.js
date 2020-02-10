import {TASK_POST} from '../actions/todo'
const initialState = {
    list: {}
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
      case "TASK_POST":
        const newTaskPost = {
            
        }
        return newTaskPost
      default: 
        return state
    }
  }