import { combineReducers } from 'redux'
let list = [
  { id: '1', title: 'Task 1', description: '', priority: 'low' },
  { id: '2', title: 'Task 2', description: '', priority: 'high' },
  { id: '3', title: 'Task 3', description: '', priority: 'low' },
  { id: '4', title: 'Task 4', description: '', priority: 'high' },
  { id: '5', title: 'Task 5', description: '', priority: 'archive' }
] 
const taskListReducer = (selectedTask = list, action) => {
     if (action.type === 'TASK_SELECTED') {
       return action.payload
     } else 
    return list
}

export default combineReducers({
    tasks: taskListReducer
})