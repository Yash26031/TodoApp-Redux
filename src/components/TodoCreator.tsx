import { ChangeEvent, FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import { TODO_ADD } from "../Actions/Todos";

type TodoCreatorProps = {};

const TodoCreator: FC<TodoCreatorProps> = (props) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({ type: TODO_ADD, payload: inputValue });
    setInputValue("");
  };
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleChange}
        className="p-2 border border-black rounded-md"
      />
      <button
        onClick={handleSubmit}
        className="px-4 py-2 ml-2 text-white bg-gray-600 rounded-md"
      >
        Save
      </button>
    </div>
  );
};

TodoCreator.defaultProps = {};

export default memo(TodoCreator);
