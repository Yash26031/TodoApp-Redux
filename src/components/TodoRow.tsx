import { FC, memo } from "react";
import Todo from "../modals/Todo";
import cn from "classnames";

type TodoProps = {
  todo: Todo;
};

const TodoRow: FC<TodoProps> = ({ todo }) => {
  const { id, title, done } = todo;
  return (
    <>
      <div className="flex items-center">
        <input className="" type="checkbox" checked={done} />
        <p className={cn("ml-2", { "line-through": done })}>{title}</p>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
