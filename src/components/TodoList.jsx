import React, { useContext, useEffect, useState } from "react";
import TodoCard from "./TodoCard";
import { TodoContext } from "../contexts/TodoContext";

export default function TodoList({ setIsVisible }) {
  const { todos } = useContext(TodoContext);
  const [visibleCount, setVisibleCount] = useState(4);
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

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

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
      <div className="flex justify-around flex-wrap h-[60vh] overflow-auto">
        {todos.slice(0, visibleCount).map((todo) => {
          return (
            <TodoCard key={todo.id} todo={todo} setIsVisible={setIsVisible} />
          );
        })}
        {visibleCount <= todos.length ? (
          <div className="w-full text-center">
            <button
              onClick={handleShowMore}
              className="text-[#2f201d] font-bold border-4 border-[#F0D1A8] px-3 py-1 hover:bg-[#F0D1A8]"
            >
              Load more
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
