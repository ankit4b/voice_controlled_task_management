// src/SpeechRecognition.js
import React, { useContext, useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { TodoContext } from "../contexts/TodoContext";

const SpeechRecognitionComponent = () => {
  let speech = new SpeechSynthesisUtterance();
  const {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    setCurrentTodo,
    currentTodo,
    resetCurrentTodo,
  } = useContext(TodoContext);

  // Voice commands setup
  const commands = [
    {
      command: "create *",
      callback: (title) => {
        console.log("title : ", title);
        let data = title.trim();
        const newTodo = {
          title: data.slice(0, 15),
          description: data,
        };
        addTodo(newTodo);
        speech.text = "New todo created";
        window.speechSynthesis.speak(speech);
        console.log(`Creating todo with title: ${title}`);
      },
    },
    {
      command: "edit *",
      callback: (title) => {
        const todoToEdit = todos.find((todo) =>
          todo.description.toLowerCase().includes(title.trim().toLowerCase())
        );
        console.log("todoToEdit : ", todoToEdit);
        if (todoToEdit) {
          setCurrentTodo(todoToEdit);
          console.log(`Editing todo with title: ${title}`);
        } else {
          console.log(`Todo not found with title: ${title}`);
        }
      },
    },
    {
      command: "delete *",
      callback: (title) => {
        const todoToDelete = todos.find((todo) =>
          todo.description.toLowerCase().includes(title.trim().toLowerCase())
        );
        if (todoToDelete) {
          deleteTodo(todoToDelete.id);
          console.log(`Deleting todo with title: ${title}`);
          speech.text = `${title} task deleted`;
        } else {
          console.log(`Todo not found with title: ${title}`);
          speech.text = `${title} task not found`;
        }
        window.speechSynthesis.speak(speech);
      },
    },
    {
      command: "complete *",
      callback: (title) => {
        const todoToComplete = todos.find((todo) =>
          todo.description.toLowerCase().includes(title.trim().toLowerCase())
        );
        if (todoToComplete) {
          updateTodo({ ...todoToComplete, isCompleted: true });
          console.log(`Marking todo as completed: ${title}`);
          speech.text = `Marking todo as completed: ${title}`;
        } else {
          console.log(`Todo not found with title: ${title}`);
          speech.text = `${title} task not found`;
        }
        window.speechSynthesis.speak(speech);
      },
    },
    {
      command: "read all*",
      callback: () => {
        console.log("inside real all");
        speech.text = "";
        todos.forEach((todo) => {
          speech.text += `-- ${todo.description}.  `;
        });

        console.log("speech.text : ", speech.text);
        window.speechSynthesis.speak(speech);
      },
    },
    {
      command: "read *",
      callback: (title) => {
        const todoRes = todos.find((todo) =>
          todo.description.toLowerCase().includes(title.trim().toLowerCase())
        );
        console.log("todoRes : ", todoRes);
        if (todoRes) {
          speech.text = todoRes.description;
        } else {
          speech.text = `${title} task not found`;
        }
        window.speechSynthesis.speak(speech);
      },
    },
  ];

  // Use speech recognition with commands
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  useEffect(() => {
    console.log("transcript : ", transcript);
    SpeechRecognition.startListening({ continuous: true });
  }, [transcript, resetTranscript]);

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button
        onClick={SpeechRecognition.startListening}
        className="border-2 border-green-200 bg-green-900 text-white p-2 rounded-md"
      >
        Start
      </button>
      <button
        onClick={() => SpeechRecognition.stopListening()}
        className="border-2 border-red-200 bg-red-900 text-white p-2 rounded-md"
      >
        Stop
      </button>
      <button
        onClick={resetTranscript}
        className="border-2 border-yellow-200 bg-yellow-900 text-white p-2 rounded-md"
      >
        Reset
      </button>
      <p>TR: {transcript}</p>
    </div>
  );
};

export default SpeechRecognitionComponent;
