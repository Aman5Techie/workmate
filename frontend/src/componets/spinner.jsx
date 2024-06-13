import { Spinner } from "@chakra-ui/react";
import React from "react";

const SpinnerComp = ({ s = 49 }) => {
  return (
    <>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        style={{ width: `${s}px`, height: `${s}px` }}
      />
    </>
  );
};

export default SpinnerComp;
