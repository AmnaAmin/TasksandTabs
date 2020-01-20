import { combineReducers } from 'redux'

const taskListReducer = (state= [], action) => {
    console.log('action=>', action.type)
    if (action.type !== 'TASK_LIST') {
      return action.data
    } else if (action.type === 'NEW_TASK') {
      return action.data
    // } else if (action.type === 'DELETE_TASK') {
    //   return state
    }
    return state
    
}

export default combineReducers({
    tasks: taskListReducer
})