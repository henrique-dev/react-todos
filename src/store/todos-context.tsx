import React, { useState } from "react";
import Todo from "../models/todo";

interface TodosContextAttrs {
  items: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void
}

interface TodosContextProviderProps {
  children?: React.ReactNode
}

export const TodosContext = React.createContext<TodosContextAttrs>({
  items: [],
  addTodo: (description: string) => { },
  removeTodo: (id: string) => { }
});

const TodosContextProvider = (props: TodosContextProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo('Learn React'),
    new Todo('Learn Typescript')
  ]);

  const addTodoHandler = (description: string) => {
    const newTodo = new Todo(description);

    setTodos((prevTodos) => prevTodos.concat(newTodo));
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextAttrs = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }

  return (
    <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
  )
};

export default TodosContextProvider;
