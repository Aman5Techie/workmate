import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StickyNavbar } from "./componets/navbar";
import BidderHomepage from "./pages/bidderHomepage";
import Homepage from "./pages/homepage";
import Taskinfo from "./pages/taskinfo";
import ChooseBidder from "./pages/chooseBidder";
import { useColorMode } from "@chakra-ui/react";
import PostTask from "./pages/postTask";

function App() {
  const { colorMode } = useColorMode();
  return (
    <>
      <div className={`${colorMode == "dark" ? "dark" : ""}`}>
        <StickyNavbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/bid" element={<BidderHomepage />} />
            <Route path="/bid/:taskid" element={<Taskinfo />} />
            <Route path="/chooseBidder" element={<ChooseBidder />} />
            <Route path="/posttask" element={<PostTask />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
