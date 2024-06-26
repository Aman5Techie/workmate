import React, { useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Loginlogout from "./loginlogout";
import Usericon from "./usericon";
import { useSelector } from "react-redux";
import { Flex, useColorMode, useDisclosure } from "@chakra-ui/react";

import { ArrowForwardIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import DrawerBtn from "./drawerBtn";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [loggedin, setloggedin] = React.useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    if (user === null) {
      setloggedin(false);
    } else {
      setloggedin(true);
    }
  }, [user]);
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Pages
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Account
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Blocks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          Docs
        </a>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="h-18">
        <Navbar className=" top-0 z-10 h-max max-w-full rounded-none px-4 lg:px-8 lg:">
          <div className="flex items-center justify-between text-blue-gray-900">
            <div className="flex space-x-2">
              <div className="md:hidden"> 
              <DrawerBtn/>
              </div>

            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-medium text-2xl"
            >
              WorkMate
            </Typography>
                          
            </div>
            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <>{loggedin ? <Usericon name={user.username} /> : <Loginlogout />}</>

              <IconButton
                variant="text"
                className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
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
                )}
              </IconButton>
            </div>
          </div>
          {/* <MobileNav open={openNav}>
            {navList}
            {loggedin ? <Usericon /> : <Loginlogout />}
          </MobileNav> */}
        </Navbar>
      </div>
    </>
  );
}
