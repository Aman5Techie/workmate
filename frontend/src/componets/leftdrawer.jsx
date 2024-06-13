import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const LeftDrawer = ({onClose,isOpen}) => {
    
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        
        <DrawerHeader borderBottomWidth="1px">Basic Drawer <DrawerCloseButton size={0} px={2} py={2}/></DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
        <DrawerFooter   borderTopWidth={2}>sadsa asd ad asd sad a ds das da dasd asd a dh</DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default LeftDrawer;
