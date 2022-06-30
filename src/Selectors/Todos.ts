import { State } from "../Store";

export const completeTodoSelector = (s: State) => s.todos.filter((t) => t.done);

export const inCompleteTodoSelector = (s: State) =>
  s.todos.filter((t) => !t.done);
