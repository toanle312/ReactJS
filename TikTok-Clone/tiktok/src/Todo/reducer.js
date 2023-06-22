import { SET_JOB, ADD_JOB, DELETE_JOB } from "./constants";

export const initState = {
  todo: '',
  todoList: ['HTML, CSS', 'JavaScript', 'ReactJS']
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        todo: action.payload
      };
    case ADD_JOB:
      return {
        ...state,
        todoList: action.payload ? [...state.todoList, action.payload] : [...state.todoList]
      };
    case DELETE_JOB:
      return {
        ...state,
        todoList: [...state.todoList].filter((todo, index) => index !== action.payload)
      }
    default:
      throw new Error(`Invalid action`);
  } 
}

export default reducer;