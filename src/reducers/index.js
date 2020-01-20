import { combineReducers } from 'redux'
import { NEW_TASK } from '../actions'

const initialState = {
  songs: [],
};

const taskListReducer = (state = initialState, action) => {
  switch(action.type) {
    case NEW_TASK:
      return {
        ...state,
        songs: action.data,
      }

    default:
      return state;
  } 
}

export default combineReducers({
  tasks: taskListReducer,
})