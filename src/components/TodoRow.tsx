import { FC, memo, useCallback } from "react";
import Todo from "../modals/Todo";
import cn from "classnames";

type TodoProps = {
  todo: Todo;
  onStatusChange: (id: number, done: boolean) => void;
};

const TodoRow: FC<TodoProps> = ({ todo, onStatusChange }) => {
  const { id, title, done } = todo;

  const onChange = useCallback(() => {
    onStatusChange(id, !done);
  }, [id, done]);

  return (
    <>
      <div className="flex items-center">
        <input
          className=""
          type="checkbox"
          checked={done}
          onChange={onChange}
        />
        <p className={cn("ml-2", { "line-through": done })}>{title}</p>
      </div>
    </>
  );
};

TodoRow.defaultProps = {};

export default memo(TodoRow);
