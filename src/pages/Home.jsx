import { useContext, useEffect, useState } from "react";
import FormModal from "../components/FormModal";
import TodoList from "../components/TodoList";
import SpeechRecognitionComponent from "../components/SpeechRecognition";
import Calendar from "../components/Calendar";
import AddIcon from "../assets/Add_Plus.svg";
import { FaFilter } from "react-icons/fa";
import Joyride from "react-joyride";
import { AuthContext } from "../contexts/AuthContext";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { isLoggedIn, user } = useContext(AuthContext);

  const [steps, setSteps] = useState([
    {
      target: ".my-calendar",
      content:
        "This is the Calendar section where you can view your upcoming scheduled tasks and events, helping you stay organized and on track.",
    },
    {
      target: ".my-voice",
      content:
        "This section enables or disables voice commands, allowing you to manage tasks seamlessly using commands like 'create,' 'edit,' 'delete,' or 'complete' followed by the task name.",
    },
  ]);

  return (
    <>
      <div className="homeContainer">
        <Joyride steps={steps} continuous={true} />
        <div className="mb-6">
          <h1 className="text-center text-4xl font-semibold">
            Hello {isLoggedIn ? user.name.split(" ")[0] : ""} ,{" "}
            <span className="text-gray-500">Start planning today</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row h-auto lg:h-[70vh] overflow-auto mx-4 lg:mx-10 rounded-md bg-[#faf7f2] shadow-custom">
          <div className="w-full lg:w-1/3 p-2 lg:p-4 my-calendar">
            <Calendar />
          </div>
          <div className="w-full lg:w-2/3 px-4 py-2">
            <div className="flex flex-wrap justify-between items-center mb-2">
              <button className="flex items-center gap-1 font-bold bg-[#F0D1A8] text-[#4b332f] text-xs lg:text-sm py-1 lg:py-2 px-2 lg:px-3">
                By latest <FaFilter />
              </button>
              <div className="flex gap-2 items-center mt-2 lg:mt-0">
                <div className="my-voice">
                  <SpeechRecognitionComponent />
                </div>
                <button
                  className="text-white bg-[#5C9967] text-3xl lg:text-4xl"
                  type="button"
                  onClick={() => setIsVisible(true)}
                >
                  <img src={AddIcon} className="w-8 lg:w-10" />
                </button>
              </div>
            </div>
            <TodoList setIsVisible={setIsVisible} />
          </div>
        </div>

        <FormModal isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>
    </>
  );
}
