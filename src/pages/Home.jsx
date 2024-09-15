import { useEffect, useState } from "react";
import FormModal from "../components/FormModal";
import TodoList from "../components/TodoList";
import SpeechRecognitionComponent from "../components/SpeechRecognition";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="homeContainer">
        <div className="flex justify-center">
          <button
            className="block text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={() => setIsVisible(true)}
          >
            Create Task
          </button>
        </div>
        <SpeechRecognitionComponent />

        <FormModal isVisible={isVisible} setIsVisible={setIsVisible} />

        <TodoList setIsVisible={setIsVisible} />
      </div>
    </>
  );
}
