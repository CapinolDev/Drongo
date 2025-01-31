import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { SignOutFinished, id, Password, username } from "./signup";
let HasSignedOut = false;
const User = () => {
  const [newpassword, setNewPassword] = useState("");
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { Password, newpassword };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.set(
      "Authorization",
      "Basic " + btoa(username + ":" + Password)
    );

    fetch("http://localhost/webservice/user/UpdatePassword/" + id, {
      method: "PUT",
      headers: requestHeaders,
      body: JSON.stringify(account),
    }).then((response) => {
      console.log("Data sent");
      console.log(response.status);
    });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto h-40 w-40 font-bold text-indigo-600 justify-center text-1xl  font-mono space-y-7">
        <button
          className={"font-mono text-2xl py-2 border border-double "}
          id="signOut"
          onClick={SignOut}
        >
          Sign out
        </button>
        <h1 className="text-4xl">Change password</h1>
        <input
          type="text"
          required
          className="bg-slate-400"
          value={newpassword}
          onChange={(e) => setNewPassword(e.target.value)}
        ></input>
        <button
          onClick={handleSubmit}
          className={
            "h-10 text-center hover:bg-slate-300 sticky top-100  border "
          }
        >
          {" "}
          Change password
        </button>
      </div>
    </>
  );
};

export { User, HasSignedOut };
