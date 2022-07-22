import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/SideBar";
import { useSelector } from "react-redux";
import SingleProfile from "../components/SingleProfile/SingleProfile";

function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const profiles = useSelector((state) => state.users.profiles);
  return (
    <div className="w-full h-screen">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="h-full block md:flex md:justify-center items-start">
        <Sidebar isOpen={isOpen} items={profiles} />
        <div className="flex-1 h-full">
          <SingleProfile profile={profiles[1]} />
        </div>
      </main>
    </div>
  );
}

export default Home;
