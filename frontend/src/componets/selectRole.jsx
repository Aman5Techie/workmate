import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SelectRole = ({ setrole }) => {
  const [clicked, setclicked] = useState(null);

  const clickedOption = (type) => {
    setclicked(type);
  };

  const submitBtn = () => {
    setrole(clicked);
  };

  return (
    <div className="flex flex-col md:items-center">
      <div className="flex justify-center items-center py-8">
        <h1 className="text-4xl uppercase">Join as a client or freelancer</h1>
      </div>
      <div className=" py-5 px-3 space-y-6 md:flex md:space-x-5 md:space-y-0 ">
        <div
          onClick={() => {
            clickedOption("proposer");
          }}
          className={`h-[120px] w-full mr-10 border-2 ${
            clicked == "proposer" ? "border-[#108a00]" : "border-[#d9d9d9]"
          } rounded-[10px] px-5 hover:border-[#108a00] md:h-[200px] hover:cursor-pointer`}
        >
          <div className="flex justify-between py-2">
            <div className=" h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                role="img"
              >
                <path
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5z"
                ></path>
                <path
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66z"
                ></path>
                <line
                  x1="10.65"
                  x2="21"
                  y1="17.29"
                  y2="17.29"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="10.04"
                  cy="5.73"
                  r="2.73"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></circle>
                <path
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27"
                ></path>
              </svg>
            </div>
            <div className="h-10 w-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <circle
                  r="12"
                  cx="50%"
                  cy="50%"
                  fill={clicked === "proposer" ? "#108a00" : "white"}
                  stroke={clicked === "proposer" ? "" : "#D9D9D9"}
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          <div className="text-2xl py-2 font-bold md:py-10">
            <h1>{"I'm Client , wants to hire someone"}</h1>
          </div>
        </div>
        <div
          onClick={() => {
            clickedOption("bidder");
          }}
          className={` h-[120px] w-full mr-10 border-2 ${
            clicked == "bidder" ? "border-[#108a00]" : "border-[#d9d9d9]"
          } rounded-[10px] px-5 hover:border-[#108a00] md:h-[200px] hover:cursor-pointer`}
        >
          <div className="flex justify-between py-2">
            <div className=" h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                role="img"
              >
                <polygon
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  points="19.38 21 8.38 21 10 14 21 14 19.38 21"
                ></polygon>
                <circle
                  cx="14.69"
                  cy="17.5"
                  r=".5"
                  fill="var(--icon-color, #001e00)"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></circle>
                <line
                  x1="9.43"
                  x2="5.99"
                  y1="21"
                  y2="21"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></line>
                <circle
                  cx="10.04"
                  cy="5.73"
                  r="2.73"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></circle>
                <path
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--icon-color, #001e00)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12"
                ></path>
              </svg>
            </div>
            <div className="h-10 w-10 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
              >
                <circle
                  r="12"
                  cx="50%"
                  cy="50%"
                  fill={clicked === "bidder" ? "#108a00" : "white"}
                  stroke={clicked === "bidder" ? "" : "#D9D9D9"}
                  strokeWidth="3"
                />
              </svg>
            </div>
          </div>
          <div className="text-2xl py-2 font-bold md:py-10">
            <h1>{"I'm Freelancer , need Work"}</h1>
          </div>
        </div>
      </div>

      <div className="w-full px-5 md:w-52 py-5 ">
        <button
          onClick={submitBtn}
          className={`rounded-full  h-10 w-full hover:${
            clicked == null
              ? " cursor-not-allowed text-gray-500 bg-gray-200 "
              : " cursor-pointer text-white bg-[#108a00] text-lg "
          }     `}
          disabled={clicked == null ? true : false}
        >
          {clicked == null
            ? "Create Account"
            : clicked == "bidder"
            ? "Let's Earn"
            : "Let's Hire"}
        </button>
      </div>
      <p className="mt-6 text-lg text-gray-600 text-center">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-blue-900 font-semibold">Login</span>
        </Link>
      </p>
    </div>
  );
};

SelectRole.propTypes = {
  setrole: PropTypes.func,
};

export default SelectRole;
