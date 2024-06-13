import React from "react";
import PropTypes from "prop-types";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import LeftDrawer from "./leftdrawer";

const DrawerBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openDrawer = () => {
    onOpen();
  };

  return (
    <>
      <IconButton
        variant="text"
        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => {
          openDrawer();
        }}
      >
        {
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        }
      </IconButton>

      <LeftDrawer isOpen={isOpen} onClose={onClose} />
    </>
  );
};

DrawerBtn.propTypes = {};

export default DrawerBtn;
