import { useState } from "react";

import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";
import { removeUser } from "../app/slices/userSlice";

const Usericon = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("authorization");
    dispatch(removeUser());
    handleClose();
  };

  const handleProfile = () => {
    // Add profile navigation logic here
    console.log("Profile clicked");
    handleClose();
  };

  const handleSettings = () => {
    // Add settings navigation logic here
    console.log("Settings clicked");
    handleClose();
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>
          <AccountCircleIcon />
        </Avatar>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleSettings}>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default Usericon;
