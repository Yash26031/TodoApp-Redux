import { FC, memo } from "react";
import Todo from "../modals/Todo";
import TodoRow from "./TodoRow";

type TodoListProps = {
  todos: Todo[];
};

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((t) => (
        <TodoRow key={t.id} todo={t}></TodoRow>
      ))}
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
