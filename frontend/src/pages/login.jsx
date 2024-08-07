import axios from "axios";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useTokenPresent } from "../customHooks/hooks";
import { setUser } from "../app/slices/userSlice";
import { login } from "../routes";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useTokenPresent(); // check for the token
  const submitform = async (e) => {
    e.preventDefault();
    const formData = {
      username: e.target.elements.username.value,
      password: e.target.elements.password.value,
    };
    try {
      const { data } = await axios.post(login, formData);
      localStorage.setItem("authorization", `Bearer ${data.token}`);
      dispatch(setUser(data.user));
      if (data.user.role == "bidder") {
        navigate("/");
      } else {
        navigate("/2");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const [username, setusername] = useState("aman");

  return (
    <>
      <div className="h-full items-center flex justify-center px-5 lg:px-48 bg-gray-100 py-12">
        <div className="max-w-screen-xl bg-white border shadow sm:rounded-lg flex justify-center flex-1">
          <div className="flex-1 text-center hidden md:flex bg-blue-200">
            <div
              className="m-12 xl:m-14 w-full bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(https://www.tailwindtap.com/assets/components/form/createaccount/login.svg)`,
              }}
            ></div>
          </div>
          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 ">
            <div className=" flex flex-col items-center">
              <div className="text-center">
                <h1 className="text-2xl xl:text-4xl font-extrabold text-blue-900">
                  LOGIN
                </h1>
                <p className="text-[12px] text-gray-500 py-3">
                  Hey enter your details to Login into your account
                </p>
              </div>
              <div className="w-full flex-1 mt-6">
                <form
                  onSubmit={(e) => {
                    submitform(e);
                  }}
                  className="mx-auto max-w-xs flex flex-col gap-4"
                >
                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                    placeholder="Username Or Email"
                  />

                  <input
                    className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    value="123456"
                    placeholder="Password"
                  />

                  <div className="w-full px-5 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white">
                    <div className="flex justify-between px-5  ">
                      <div className="flex cursor-pointer" onClick={()=>{
                        setusername("client")
                      }}>
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">CLIENT</span>
                      </div>
                      <div className="flex cursor-pointer" onClick={()=>{
                        setusername("aman")
                      }} >
                        <svg
                          className="w-6 h-6 -ml-2"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                          <circle cx="8.5" cy="7" r="4" />
                          <path d="M20 8v6M23 11h-6" />
                        </svg>
                        <span className="ml-3">USER</span>
                      </div>
                    </div>
                  </div>

                  <button className="mt-5 tracking-wide font-semibold bg-blue-900 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                      className="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                      <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">Login</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-600 text-center">
                    Already have an account?{" "}
                    <Link to="/signup">
                      <span className="text-blue-900 font-semibold">
                        Sign in
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
