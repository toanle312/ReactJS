// import './App.css';
import { useRef, useReducer } from "react";

const initState = {
  todo: '',
  todoList: ['HTML, CSS', 'JavaScript', 'ReactJS']
};

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}

const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}

const deleteJob = payload => {
  return {
    type: DELETE_JOB,
    payload
  }
}

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
        ... state,
        todoList: [...state.todoList].filter((todo, index) => index !== action.payload)
      }
    default:
      throw new Error(`Invalid action`);
  }
  
}

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const {todo, todoList} = state;

  const inputRef = useRef();

  const handelSubmit = () => {
    dispatch(addJob(todo));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <input 
        ref={inputRef}
        placeholder="Enter todo ..."
        value={todo}
        onChange={e => {
          dispatch(setJob(e.target.value.trim()));
        }}
      />
      <button 
        onClick={handelSubmit}
      >Add</button>
      <ul>
        {todoList.map((todoItem, index) => (
          <li key={index}>{todoItem}
            <button
              style={{ marginLeft: "10px", cursor: "pointer"}}
              onClick={() => {
                dispatch(deleteJob(index));
              }}
            >&times;</button>
          </li>
        )
        )}
      </ul>
    </div>
  );
}

export default App;
