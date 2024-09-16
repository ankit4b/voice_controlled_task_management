import { useEffect, useState } from "react";
import FormModal from "../components/FormModal";
import TodoList from "../components/TodoList";
import SpeechRecognitionComponent from "../components/SpeechRecognition";
import Calendar from "../components/Calendar";
import AddIcon from "../assets/Add_Plus.svg";
import { FaFilter } from "react-icons/fa";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="homeContainer">
        <div className="mb-6">
          <h1 className="text-center text-4xl font-semibold">
            Hello, Ankit ,{" "}
            <span className="text-gray-500">Start planning today</span>
          </h1>
        </div>

        <div className="flex h-[70vh] overflow-auto mx-10 rounded-md bg-[#faf7f2] shadow-lg">
          <div className="w-1/3 p-4">
            <Calendar />
          </div>
          <div className="w-2/3 px-4 py-4">
            <div className="flex justify-between items-center">
              <button className="flex items-center gap-1 font-bold bg-[#F0D1A8] text-[#4b332f] text-sm py-2 px-3">
                By latest <FaFilter />
              </button>
              <button
                className="text-white bg-[#5C9967] text-4xl"
                type="button"
                onClick={() => setIsVisible(true)}
              >
                <img src={AddIcon} className="w-10" />
              </button>
            </div>
            <TodoList setIsVisible={setIsVisible} />
          </div>
        </div>
        {/* <SpeechRecognitionComponent /> */}

        <FormModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </>
  );
}
