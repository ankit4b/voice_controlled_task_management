import { createContext, useState } from "react";
import { Client, Databases, ID } from "appwrite";

const TodoContext = createContext();
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6731ec590023ada982a8");

const databases = new Databases(client);
console.log("databases : ", databases);

const getFromLocalDB = () => {
  return JSON.parse(localStorage.getItem("todoList")) ?? [];
};

const saveToLocalDB = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const addToDB = (data) => {
  console.log("addToDB data : ", data);
  const promise = databases.createDocument(
    "6731ec720019905f2375",
    "6731ec7a00350f203201",
    ID.unique(),
    data
  );

  promise.then(
    function (response) {
      console.log("addToDB response : ", response);
    },
    function (error) {
      console.log("addToDB error : ", error);
    }
  );
};

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getFromLocalDB());
  const [currentTodo, setCurrentTodo] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const addTodo = (newTodo) => {
    newTodo = {
      ...newTodo,
      isCompleted: false,
    };
    const newTodos = [
      { ...newTodo, id: Date.now(), lastModified: Date.now() },
      ...todos,
    ];
    setTodos(newTodos);
    saveToLocalDB("todoList", newTodos);
    addToDB(newTodo);
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
