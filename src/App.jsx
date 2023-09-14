import { useReducer, useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []); //the empty array shows that the todo list is empty as an initail state
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-80 py-2 px-2 "
            placeholder="Add Task..."
          />
        </form>
        <div className="text-left w-full mt-5 overflow-y-scroll ">
          {" "}
          {todos.map((todo) => {
            return <Todo key={todo.id} dispatch={dispatch} todo={todo}></Todo>;
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
