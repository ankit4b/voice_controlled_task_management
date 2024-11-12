import { NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import UserAvatar from "../assets/user_avatar.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-[#f2eaea] px-10 py-2 flex justify-between items-center shadow-xl mb-6 sticky top-0 z-10">
        <NavLink to="/">
          <h1 className="font-island font-normal text-5xl text-black cursor-pointer text-center sm:text-center">
            Task Vox
            {/* Voice Controlled Task Management */}
          </h1>
        </NavLink>
        <ul className="gap-5 items-center text-black text-lg flex">
          {/* <li className="cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-orange-600" : "";
              }}
            >
              Home
            </NavLink>
          </li>

          <li className="cursor-pointer">
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-orange-600" : "";
              }}
            >
              About
            </NavLink>
          </li> */}

          <li className="cursor-pointer">
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-orange-600" : "";
              }}
            >
              {/* <FaUser /> */}
              <img
                src={UserAvatar}
                className="w-10 h-10 rounded-full shadow-lg"
              />
            </NavLink>
          </li>

          {isLoggedIn ? (
            <li
              onClick={logout}
              className="text-sm text-[#f2eaea] bg-red-700 hover:bg-red-800 px-3 py-2 rounded-md cursor-pointer"
            >
              Logout
            </li>
          ) : (
            <li
              onClick={() => navigate("/login")}
              className="font-bold text-base text-[#2f201d] hover:text-[#f2eaea] hover:bg-[#553e3a] border-2 border-[#553e3a] px-3 py-1 rounded-md cursor-pointer"
            >
              Login
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
