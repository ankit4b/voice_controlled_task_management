import { createContext, useState } from "react";

const TodoContext = createContext();

const getFromLocalDB = () => {
  return JSON.parse(localStorage.getItem("todoList")) ?? [];
};

const saveToLocalDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getFromLocalDB());
  const [currentTodo, setCurrentTodo] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const addTodo = (newTodo) => {
    const newTodos = [
      {
        id: Date.now(),
        ...newTodo,
        isCompleted: false,
        lastModified: Date.now(),
      },
      ...todos,
    ];
    setTodos(newTodos);
    saveToLocalDB("todoList", newTodos);
    resetCurrentTodo();
  };

  const updateTodo = (newTodo = currentTodo) => {
    const newTodos = todos.map((todo) =>
      todo.id === newTodo.id ? { ...newTodo, lastModified: Date.now() } : todo
    );
    newTodos.sort((a, b) => a.isCompleted - b.isCompleted);
    setTodos(newTodos);
    saveToLocalDB("todoList", newTodos);
    resetCurrentTodo();
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveToLocalDB("todoList", newTodos);
  };

  const resetCurrentTodo = () => {
    setCurrentTodo({ title: "", description: "", isCompleted: false });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        currentTodo,
        setCurrentTodo,
        addTodo,
        updateTodo,
        deleteTodo,
        resetCurrentTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
