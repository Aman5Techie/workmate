import React from "react";

import backgroundImage from "../assets/image.png";
import { useNavigate } from "react-router-dom";
import { useTokenPresent } from "../customHooks/hooks";

const Homepage = () => {
  const navigate = useNavigate();
  useTokenPresent();

  return (
    <div className="h-[543px]">
      <div
        className=" h-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4">Find local tasks near you</h1>
          <p className="text-xl mb-8">Get tasks done with ease!</p>
          <button
            onClick={() => {
              navigate("/login");
            }}
            className="bg-black py-2 px-4 text-white font-bold rounded"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
