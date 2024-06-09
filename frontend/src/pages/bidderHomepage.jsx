import React from "react";
import PropTypes from "prop-types";
import { useTokenAbsent } from "../customHooks/hooks";
import Tags from "../componets/tags";
import Jobcard from "../componets/jobcard";

const BidderHomepage = () => {
  useTokenAbsent();
  return (
    <div className="grid grid-cols-12 ">
      <div className="bg-gray-400 col-span-2 hidden md:flex"></div>
      <div className="bg-gray-100 col-span-10 md:col-span-8 w-full ">
        <div>
          <Tags />
        </div>
        <div className=" flex justify-center">
          <Jobs />
        </div>
      </div>

      <div className="bg-green-500 col-span-2">a</div>
    </div>
  );
};

const Jobs = () => {
  return (
    <>
      <div className="w-full h-screen md:flex ">
      <div className="flex flex-wrap justify-center md:justify-center overflow-scroll no-scrollbar ">
          <Jobcard />
          <Jobcard />
          <Jobcard />
          <Jobcard />
          <Jobcard />
          <Jobcard />
        </div>
      </div>
    </>
  );
};

BidderHomepage.propTypes = {};

export default BidderHomepage;
