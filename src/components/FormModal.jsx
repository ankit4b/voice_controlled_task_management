import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export default function FormModal({ isVisible, setIsVisible }) {
  const { currentTodo, setCurrentTodo, resetCurrentTodo, addTodo, updateTodo } =
    useContext(TodoContext);
  const [isNew, setIsNew] = useState(true);

  const handelSubmit = () => {
    addTodo(currentTodo);
    setIsVisible(false);
  };

  const handelUpdate = () => {
    updateTodo(currentTodo);
    setIsVisible(false);
  };

  const closeModal = () => {
    setIsVisible(false);
    resetCurrentTodo();
  };

  useEffect(() => {
    setIsNew(!Boolean(currentTodo.id));
  }, [currentTodo]);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10">
        <div className="w-[600px] flex flex-col bg-white p-2 py-5 rounded dark:bg-slate-600 relative">
          <button
            onClick={closeModal}
            className="text-white text-xl place-self-end absolute top-1 right-2"
          >
            X
          </button>
          <div>
            <form className="max-w-sm mx-auto">
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter title"
                  value={currentTodo.title}
                  onChange={(e) =>
                    setCurrentTodo({ ...currentTodo, title: e.target.value })
                  }
                  required
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Desciption
                </label>
                <textarea
                  id="description"
                  rows="4"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter description"
                  value={currentTodo.description}
                  onChange={(e) =>
                    setCurrentTodo({
                      ...currentTodo,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={isNew ? handelSubmit : handelUpdate}
                  className="bg-slate-900 text-white font-semibold px-4 py-2 rounded-md dark:bg-slate-400 dark:text-blue-950"
                >
                  {isNew ? "Create" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
