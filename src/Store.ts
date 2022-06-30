import { createStore, Reducer } from "redux";
import { TODO_ADD, TODO_STATUS_CHANGE } from "./Actions/Todos";
import Todo from "./modals/Todo";

export type State = {
  todos: Todo[];
};

const saveTodos = localStorage.getItem("todos");
const initialState: State = {
  todos: saveTodos ? JSON.parse(saveTodos) : [],
};

let nextId = 1;

const reducer: Reducer<State> = (state = initialState, action) => {
  switch (action.type) {
    case TODO_STATUS_CHANGE: {
      const { id, done } = action.payload;

      const newTodos = state.todos.map((t) => {
        if (t.id === id) {
          return { ...t, done };
        }
        return t;
      });
      return { ...state, todos: newTodos };
    }
    case TODO_ADD: {
      const todoText = action.payload;
      const todo: Todo = { id: nextId, title: todoText, done: false };
      nextId++;
      return { ...state, todos: [...state.todos, todo] };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
