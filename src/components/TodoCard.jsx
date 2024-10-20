import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { FaTrash, FaEdit } from "react-icons/fa";
import { TiInputChecked } from "react-icons/ti";
import { ImCheckboxUnchecked } from "react-icons/im";
import { CiCircleCheck } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";

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
    <div className="w-full sm:w-full md:w-[45%] mb-4 h-fit min-h-40 border border-b-slate-400 bg-[#F0D1A8] p-3 flex gap-3  shadow-lg relative resize overflow-auto rounded-lg">
      <div className="flex-1">
        <h3 className="text-[#2f201d] font-bold pb-2 flex gap-2 items-center capitalize">
          <span className={`${todo.isCompleted ? "line-through" : ""}`}>
            {todo.title}...
          </span>
        </h3>

        <div className="h-[5rem] overflow-y-auto">
          <p
            style={{ whiteSpace: "pre-wrap" }}
            className="text-sm text-[#614641]"
          >
            {todo.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-around items-center">
        <div>
          <span onClick={() => handelCompleted()}>
            {todo.isCompleted ? (
              <FaCheckCircle size={15} width={15} height={15} />
            ) : (
              <CiCircleCheck size={18} width={18} height={18} />
            )}
          </span>
        </div>
        <div className="" onClick={() => handelUpdateTodo(todo.id)}>
          <FaEdit size={15} width={15} height={15} />
        </div>
        <div className="p-1 cursor-pointer" onClick={() => deleteTodo(todo.id)}>
          <FaTrash size={15} width={15} height={15} />
        </div>
      </div>

      {todo.datetime ? (
        <h3 className="font-bold text-xs absolute bottom-[2px] ">
          {todo.datetime.split("T")[0]} {todo.datetime.split("T")[1]}
        </h3>
      ) : (
        <></>
      )}
    </div>
  );
}
