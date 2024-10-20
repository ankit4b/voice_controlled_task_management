import React, { useContext, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import BackgroundCover from "../assets/background_cover.jpg";
import UserAvatar from "../assets/user_avatar.png";

export default function Profile() {
  const { isLoggedIn, user } = useContext(AuthContext);

  return !isLoggedIn ? (
    <Navigate to="/login" />
  ) : (
    <>
      <div className="h-screen">
        <div
          className="w-full h-2/4"
          style={{
            "background-image": `url(${BackgroundCover})`,
            "background-size": "cover",
            "background-position": "center",
          }}
        ></div>
        <div className="h-40 w-10/12 m-auto bg-white mt-[-100px] rounded-lg p-5 shadow-lg relative">
          <div className="flex items-center justify-between">
            <div className="flex gap-5 text-center">
              <div>
                <h3>22</h3>
                <p>Total</p>
              </div>
              <div>
                <h3>12</h3>
                <p>Completed</p>
              </div>
              <div>
                <h3>10</h3>
                <p>pending</p>
              </div>
            </div>
            <div className="absolute top-[-40px] left-[50%] right-[-50%] border-4 border-white max-w-fit rounded-full shadow-xl">
              <img
                src={UserAvatar}
                className="w-20 h-20 rounded-full shadow-lg"
              />
            </div>
            <div>
              <button className="px-4 py-2 bg-red-300">Edit</button>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-5xl font-island font-bold">{user.name}</h2>
            <p className="font-abhaya">{user.email}</p>
          </div>
        </div>
        {/* <p>Name : {user.name}</p>
        <p>Email : {user.email}</p> */}
      </div>
    </>
  );
}
