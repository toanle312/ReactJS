// import './App.css';
import { useRef, useReducer } from "react";
import reducer, {initState} from "./reducer";
import { setJob, addJob, deleteJob } from "./actions";
import logger from "./logger";

function TodoApp() {
  const [state, dispatch] = useReducer(logger(reducer), initState);

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

export default TodoApp;
