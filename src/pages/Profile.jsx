import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import BackgroundCover from "../assets/background_cover.jpg";
import UserAvatar from "../assets/user_avatar.png";
import { TodoContext } from "../contexts/TodoContext";

export default function Profile() {
  const { isLoggedIn, user } = useContext(AuthContext);
  const { todos } = useContext(TodoContext);
  const [todoSummary, setTodoSummary] = useState({
    total: 0,
    completed: 0,
    pending: 0,
  });

  const calculate = (todos) => {
    let count = 0;
    todos.forEach((todo) => {
      if (todo.isCompleted) {
        count++;
      }
    });
    setTodoSummary({
      total: todos.length,
      completed: count,
      pending: todos.length - count,
    });
  };

  useState(() => {
    console.log("todos : ", todos);
    calculate(todos);
  }, [todos]);

  return !isLoggedIn ? (
    <Navigate to="/login" />
  ) : (
    <>
      <div className="h-screen">
        <div
          className="w-full h-2/4"
          style={{
            backgroundImage: `url(${BackgroundCover})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="w-10/12 m-auto bg-white mt-[-100px] rounded-lg p-5 shadow-lg relative">
          <div className="flex items-center justify-center">
            <div className="border-4 border-white max-w-fit rounded-full shadow-xl mt-[-60px] mb-5">
              <img
                src={UserAvatar}
                className="w-20 h-20 rounded-full shadow-lg"
              />
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-island font-bold">{user.name}</h2>
            <p className="font-abhaya">{user.email}</p>
          </div>
          <div>
            <div className="flex items-center justify-between mt-5">
              <div className="flex gap-5 text-center">
                <div>
                  <h3 className="text-gray-800 text-3xl font-bold">
                    {todoSummary.total}
                  </h3>
                  <p className="text-gray-600">Total</p>
                </div>
                <div>
                  <h3 className="text-gray-800 text-3xl font-bold">
                    {todoSummary.completed}
                  </h3>
                  <p className="text-gray-600">Completed</p>
                </div>
                <div>
                  <h3 className="text-gray-800 text-3xl font-bold">
                    {todoSummary.pending}
                  </h3>
                  <p className="text-gray-600">pending</p>
                </div>
              </div>
              <div>
                <button className="px-4 py-2 bg-orange-300 rounded">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <p>Name : {user.name}</p>
        <p>Email : {user.email}</p> */}
      </div>
    </>
  );
}
