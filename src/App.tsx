import H3 from "./components/H3";
import TodoList from "./components/TodoList";

function App() {
  const myTodos = [
    {
      id: 1,
      title: "bring milk",
      done: true,
    },
    {
      id: 2,
      title: "bring cofee",
      done: false,
    },
    {
      id: 3,
      title: "bring chaiii",
      done: true,
    },
  ];
  return (
    <div className="p-5">
      <H3 className="mb-2">Things to do</H3>
      <TodoList todos={myTodos} />
      <H3 className="mt-4 mb-2">Things done</H3>
      <TodoList todos={myTodos} />
    </div>
  );
}

export default App;
