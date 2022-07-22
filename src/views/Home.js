import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/SideBar";
import { useDispatch, useSelector } from "react-redux";
import SingleProfile from "../components/SingleProfile/SingleProfile";

import { selectProfile } from "../store/actions/users";

function Home() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const profiles = useSelector((state) => state.users.profiles);
  const selectedProfile = useSelector((state) => state.users.selectedProfile);

  const selectProfileHandler = (profile) => {
    dispatch(selectProfile(profile));
  };

  return (
    <div className="w-full h-screen">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="h-full block md:flex md:justify-center items-start">
        <Sidebar
          isOpen={isOpen}
          items={profiles}
          selectProfileHandler={selectProfileHandler}
        />
        <div className="flex-1 h-full">
          <SingleProfile profile={selectedProfile} />
        </div>
      </main>
    </div>
  );
}

export default Home;
