import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { FaTrash, FaEdit } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import { ImCheckboxUnchecked } from "react-icons/im";

export default function TodoCard({ todo, setIsVisible }) {
  const { deleteTodo, updateTodo, setCurrentTodo } = useContext(TodoContext);

  const handelUpdateTodo = (id) => {
    setIsVisible(true);
    setCurrentTodo(todo);
  };

  const handelCompleted = () => {
    const newTodo = { ...todo, isCompleted: !todo.isCompleted };
    console.log("newTodo : ", newTodo);
    // setCurrentTodo(newTodo);
    updateTodo(newTodo);
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 h-fit min-h-40 border border-b-slate-400 bg-yellow-300 p-3 pb-4 flex flex-col gap-3  shadow-lg relative resize overflow-auto">
      <h3 className="font-bold border-b border-b-yellow-50 pb-2 flex gap-2 items-center">
        <span onClick={() => handelCompleted()}>
          {todo.isCompleted ? (
            <TiInputChecked size={20} width={20} height={20} />
          ) : (
            <ImCheckboxUnchecked size={15} width={15} height={15} />
          )}
        </span>
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </h3>

      <div>
        <p style={{ whiteSpace: "pre-wrap" }}>{todo.description}</p>
      </div>

      <div
        className="absolute bottom-1 right-1 p-1 cursor-pointer"
        onClick={() => deleteTodo(todo.id)}
      >
        <FaTrash size={15} width={15} height={15} />
      </div>
      <div
        className="absolute top-0 right-1 p-1 cursor-pointer"
        onClick={() => handelUpdateTodo(todo.id)}
      >
        <FaEdit size={15} width={15} height={15} />
      </div>
      {/* <div
        className="absolute bottom-0 left-0 p-1 cursor-pointer"
        onClick={() => handelCompleted()}
      >
        {todo.isCompleted ? <TiInputChecked /> : <ImCheckboxUnchecked />}
      </div> */}
    </div>
  );
}
