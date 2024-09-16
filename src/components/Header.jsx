import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import ProfilePic from "../assets/profile_pic.jpeg";

export default function Header() {
  return (
    <>
      <nav className="bg-[#f2eaea] px-10 py-2 flex justify-between items-center shadow-xl mb-6">
        <h1 className="font-island font-normal text-5xl text-black cursor-pointer text-center sm:text-center">
          Task Vox
          {/* Voice Controlled Task Management */}
        </h1>
        <ul className="gap-5 items-center text-black text-lg hidden sm:hidden md:flex lg:flex xl:flex">
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
                src={ProfilePic}
                className="w-10 h-10 rounded-full shadow-md"
              />
            </NavLink>
          </li>

          {/* <li className="cursor-pointer bg-red-700 hover:bg-red-800 rounded p-1">
            Logout
          </li> */}
        </ul>
      </nav>
    </>
  );
}
