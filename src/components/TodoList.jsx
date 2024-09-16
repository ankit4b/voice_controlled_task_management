import React, { useContext, useEffect } from "react";
import TodoCard from "./TodoCard";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList({ setIsVisible }) {
  const { todos } = useContext(TodoContext);
  // let speech = new SpeechSynthesisUtterance();

  // const playTodo = () => {
  //   speech.text = "";
  //   let no = 1;
  //   todos.forEach((todo) => {
  //     speech.text += `-- ${todo.title}.  `;
  //     no++;
  //   });

  //   console.log("speech.text : ", speech.text);
  //   window.speechSynthesis.speak(speech);
  // };

  useEffect(() => {
    console.log("Todos : ", todos);
  }, [todos]);
  return (
    <div>
      {/* <button
        onClick={playTodo}
        className="m-1 border-2 border-red-300 px-2 py-1 rounded-md"
      >
        Play
      </button> */}
      <hr />
      <div className="flex justify-around flex-wrap p-3 h-[60vh] overflow-auto">
        {todos.map((todo) => {
          return (
            <TodoCard key={todo.id} todo={todo} setIsVisible={setIsVisible} />
          );
        })}
      </div>
    </div>
  );
}
