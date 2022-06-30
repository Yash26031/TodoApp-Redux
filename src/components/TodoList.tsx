import { FC, memo } from "react";
import { connect, useDispatch } from "react-redux";
import { TODO_STATUS_CHANGE } from "../Actions/Todos";
import Todo from "../modals/Todo";
import {
  completeTodoSelector,
  inCompleteTodoSelector,
} from "../Selectors/Todos";
import { State } from "../Store";
import TodoRow from "./TodoRow";

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const dispatch = useDispatch();

  const handleChange = (id: number, done: boolean) => {
    dispatch({ type: TODO_STATUS_CHANGE, payload: { id, done } });
  };

  return (
    <div>
      {todos.map((t) => (
        <TodoRow onStatusChange={handleChange} key={t.id} todo={t}></TodoRow>
      ))}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);

const incompleteMapper = (s: State) => ({
  todos: inCompleteTodoSelector(s),
});

const completeMapper = (s: State) => ({
  todos: completeTodoSelector(s),
});

export const InCompleteTodoList = connect(incompleteMapper)(TodoList);

export const CompleteTodoList = connect(completeMapper)(TodoList);
