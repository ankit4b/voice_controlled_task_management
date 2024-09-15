import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <nav className="bg-slate-900 p-4 flex justify-between items-center mb-2">
        <h1 className="text-xl text-gray-200 font-bold cursor-pointer text-center sm:text-center">
          Voice Controlled Task Management
        </h1>
        <ul className="gap-5 items-center text-white text-lg hidden sm:hidden md:flex lg:flex xl:flex">
          <li className="cursor-pointer">
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
          </li>

          <li className="cursor-pointer">
            <NavLink
              to="/profile"
              className={({ isActive }) => {
                return isActive ? "border-b-4 border-b-orange-600" : "";
              }}
            >
              <div>
                <FaUser />
              </div>
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
