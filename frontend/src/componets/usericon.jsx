import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
  Box,
  Portal,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeUser } from "../app/slices/userSlice";

const Usericon = ({ name }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("authorization");
    dispatch(removeUser());
    window.location.href = "/login";
  };

  const handleProfile = () => {
    console.log("Profile clicked");
  };

  const handleSettings = () => {
    console.log("Settings clicked");
  };

  return (
    <Box position="relative">
      <Menu>
        <MenuButton>
          <Avatar name={name} src="https://bit.ly/broken-link" />
        </MenuButton>
        <Portal>
          <MenuList zIndex="popover">
            <MenuItem onClick={handleProfile}>Profile</MenuItem>
            <MenuItem onClick={handleSettings}>Settings</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </MenuList>
        </Portal>
      </Menu>
    </Box>
  );
};

export default Usericon;
