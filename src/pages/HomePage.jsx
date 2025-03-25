import React from "react";
import Navbar from "./NavBar";
import bg from "../assets/bg.jpg";
import SignUp from "./SignUp";
import LoginForm from "./LoginPage";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Full-screen container with background image */}
      <div className="relative w-full h-screen">
        {/* Background image */}
        <img
          src={bg}
          alt="Background Image"
          className="w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute top-0 w-full mt-10 flex justify-center items-center gap-40">
          {/* First Template */}
          <div className="template flex flex-col w-64 ">
            <div className="p-5">
              <h1 className="font-mono text-2xl  ">New Here?</h1>
              <h1 className="font-mono text-sm  ">
                Ready to embark on your new educational escapade? Buckle up,
                friend, because this journey is about to get real—real fun, real
                challenging, and real caffeinated!
              </h1>
            </div>
          </div>

        <LoginForm></LoginForm>
        </div>
      </div>
    </>
  );
};

export default HomePage;
