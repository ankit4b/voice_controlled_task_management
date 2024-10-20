import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export default function Signup() {
  const { isLoggedIn, register: registerForm } = useContext(AuthContext);
  const navigate = useNavigate();
  const form = useForm();
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form submitted: ", data);
    registerForm(data.email, data.password, data.name);
    navigate("/profile");
  };

  return isLoggedIn ? (
    <Navigate to="/profile" />
  ) : (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-2 mx-auto lg:py-0">
          <div
            className="w-full bg-[#f2eaea] rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-lg"
            style={{
              backgroundImage: "linear-gradient(175deg, #f2eaea, #f0d1a8)",
            }}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-[#2f201d] md:text-2xl ">
                Create an account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-[#2f201d]"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="First_name Last_name"
                    {...register("name", { required: "Name is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="username"
                  />
                  <p className="text-sm text-red-700 mt-2">
                    {errors.name?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-[#2f201d]"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="name@company.com"
                    {...register("email", { required: "Email is required" })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="username"
                  />
                  <p className="text-sm text-red-700 mt-2">
                    {errors.email?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-[#2f201d]"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required: "Password is required",
                      pattern: {
                        value:
                          /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
                        message:
                          "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be 8-16 characters long.",
                      },
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="new-password"
                  />
                  <p className="text-sm text-red-700 mt-2">
                    {errors.password?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-[#2f201d]"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    {...register("confirmPassword", {
                      required: "Confirm password is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    autoComplete="new-password"
                  />
                  <p className="text-sm text-red-700 mt-2">
                    {errors.confirmPassword?.message}
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      {...register("isAccepted", {
                        required: "*",
                      })}
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-[#2f201d]"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions{" "}
                        <span className="text-sm text-red-700">
                          {errors.isAccepted?.message}
                        </span>
                      </a>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full text-[#2f201d] hover:text-[#F0D1A8] font-bold border-2 border-[#553e3a] px-3 py-1 hover:bg-[#553e3a] rounded-md"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-900 dark:text-gray-500 text-center">
                  Already have an account?{" "}
                  <a
                    onClick={() => navigate("/login")}
                    className="font-medium text-[#2f201d] hover:underline cursor-pointer"
                  >
                    Login here
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
