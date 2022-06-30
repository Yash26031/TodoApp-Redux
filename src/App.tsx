import H3 from "./components/H3";
import TodoCreator from "./components/TodoCreator";
import { CompleteTodoList, InCompleteTodoList } from "./components/TodoList";

function App() {
  return (
    <div className="p-5">
      <H3 className="mb-2">Things to do</H3>
      <InCompleteTodoList />
      <TodoCreator />
      <H3 className="mt-4 mb-2">Things done</H3>
      <CompleteTodoList />
    </div>
  );
}

export default App;
