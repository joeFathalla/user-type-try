import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-screen">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="h-full flex justify-center items-start">
        <Sidebar isOpen={isOpen} />
        <div className="flex-1 h-full">
          <span>the component</span>
        </div>
      </main>
    </div>
  );
}

export default Home;
