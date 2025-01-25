import React from "react";
import { NavLink } from "react-router-dom";
import { ChangingUsername, ChangingSignedIn } from "../signup";
import { ImUser } from "react-icons/im";

let SignedIn = false;
let Username = "";

const Navbar = () => {
  if (ChangingSignedIn == false) {
    return (
      <div className="bg-slate-900 sticky top-0 mx-auto  w-full   border-gray-400 text-white z-20 h-20">
        <div className="flex  py-3 px-6 justify-around  ">
          <img
            src="src\assets\drongoLogoPlaceholder.png"
            className="size-14"
          ></img>
          <NavLink to={"/"} className={"font-mono text-2xl py-2"}>
            Home
          </NavLink>
          <NavLink to={"/login"} className={"font-mono text-2xl py-2"}>
            Login
          </NavLink>
          <NavLink to={"/register"} className={"font-mono text-2xl py-2"}>
            Register
          </NavLink>
          <p id="usernameNavbar" className={"font-mono text-2xl py-2"}>
            Not signed in!
          </p>
        </div>
      </div>
    );
  }
  if (ChangingSignedIn == true) {
    return (
      <div className="bg-slate-900 sticky top-0 mx-auto  w-full   border-gray-400 text-white z-20 h-20">
        <div className="flex  py-3 px-6 justify-around  ">
          <img
            src="src\assets\drongoLogoPlaceholder.png"
            className="size-14"
          ></img>
          <NavLink to={"/"} className={"font-mono text-2xl py-2"}>
            Home
          </NavLink>
          <NavLink
            to={"/user"}
            id="usernameNavbar"
            className={"font-mono text-2xl py-2"}
          >
            <ImUser />
            {ChangingUsername}
          </NavLink>
        </div>
      </div>
    );
  }
};

export { Navbar, SignedIn, Username };
