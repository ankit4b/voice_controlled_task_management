import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const { isLoggedIn, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted: ", data);
    login(data.email, data.password);
    navigate("/profile");
  };
  return isLoggedIn ? (
    <Navigate to="/profile" />
  ) : (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
          <div
            className="w-full bg-[#f2eaea] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
            style={{
              backgroundImage: "linear-gradient(175deg, #f2eaea, #f0d1a8)",
            }}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#2f201d] md:text-2xl ">
                Login your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#2f201d]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-[#2f201d] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    {...register("email", { required: "Email is required" })}
                    autoComplete="username"
                  />
                  <p className="text-sm text-red-700 mt-2">
                    {errors.email?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-[#2f201d] "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-[#2f201d] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    autoComplete="current-password"
                  />
                  <p className="text-sm text-red-700 mt-2">
                    {errors.password?.message}
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full text-[#2f201d] hover:text-[#F0D1A8] font-bold border-2 border-[#553e3a] px-3 py-1 hover:bg-[#553e3a] rounded-md"
                >
                  Login
                </button>
                <p className="text-sm font-light text-gray-900 dark:text-gray-500 text-center">
                  Don't have an account?{" "}
                  <a
                    onClick={() => navigate("/signup")}
                    className="font-medium text-[#2f201d] hover:underline cursor-pointer"
                  >
                    Sign-up here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <DevTool control={control} />
      </section>
    </>
  );
}
