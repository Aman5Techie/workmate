import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTokenAbsent } from "../customHooks/hooks";
import Tags from "../componets/tags";
import Jobcard from "../componets/jobcard";
import { useColorMode } from "@chakra-ui/react";
import { Box, Pagination } from "@mui/material";
import { useQuery } from "@apollo/client";
import { getUser } from "../graphql/query";

const BidderHomepage = () => {
  useTokenAbsent();
  const { colorMode } = useColorMode();

  return (
    <div className={`grid grid-cols-12 ${colorMode == "dark" ? "dark" : ""} `}>
      <div className="bg-gray-400 col-span-2 hidden md:flex"></div>
      <div className="bg-gray-100 col-span-10 md:col-span-8 w-full dark:bg-gray-900">
        <div>
          <Tags />
        </div>
        <div className=" flex justify-center">
          <Jobs theme={colorMode} />
        </div>
      </div>

      <div className="bg-green-500 col-span-2">a</div>
    </div>
  );
};

const Jobs = ({ theme }) => {
  const [jobs, setjobs] = useState([1, 2, 3, 4, 5, 6]);
  const [currentpage, setcurrentpage] = useState(1);
  const { data, loading, error } = useQuery(getUser);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const changePageNumber = (e, page) => {
    setcurrentpage(page);
    console.log(page);
  };

  return (
    <>
      <div>
        <div className="w-full  md:flex ">
          <div className="flex flex-wrap justify-center  md:justify-center  dark:bg-[#121212] ">
            {jobs.map((_, i) => {
              return <Jobcard key={i} />;
            })}
          </div>
        </div>

        <div className="w-full ">
          <Box display="flex" justifyContent="center">
            <Pagination
              count={10}
              color="primary"
              page={currentpage}
              onChange={changePageNumber}
              className="font-red-800"
              sx={{
                "& .MuiPaginationItem-page, & .MuiPaginationItem-previousNext, & .MuiPaginationItem-next, & .MuiPaginationItem-root ":
                  {
                    color: `${theme == "dark" ? "white" : "black"}`, // Example: Change icon color to blue-500 (adjust as needed)
                  },
                "& .Mui-selected ": {
                  color: "white", // Example: Change icon color to blue-500 (adjust as needed)
                },
              }}
            />
          </Box>
        </div>
      </div>
    </>
  );
};

BidderHomepage.propTypes = {};

export default BidderHomepage;
