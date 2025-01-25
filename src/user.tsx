import React from "react";
import { Navbar } from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { SignOutFinished } from "./signup";
let HasSignedOut = false;
const User = () => {
  // This tells the signup.tsx to switch the username to "" and the SignedIn to false

  let navigate = useNavigate();
  function SignOut() {
    HasSignedOut = true;
    navigate("/login");
    window.location.reload();
  }
  if (SignOutFinished === true) {
    HasSignedOut = false;
    navigate("/");
  }
  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-center mx-auto">
        <button
          className={"font-mono text-2xl py-2"}
          id="signOut"
          onClick={SignOut}
        >
          Sign out
        </button>
      </div>
    </>
  );
};

export { User, HasSignedOut };
