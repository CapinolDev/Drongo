import React, { useState } from "react";
import { Navbar, SignedIn, Username } from "./components/Navbar";
import { useNavigate } from "react-router-dom";
import { HasSignedOut } from "./user";
let ChangingUsername = "";
let ChangingSignedIn = false;
let SignOutFinished = false;
let id = "";
let Password = "";
const Signup = () => {
  let loginCheck = document.getElementById("loginCheck");
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  if (HasSignedOut === true) {
    ChangingUsername = "";
    ChangingSignedIn = false;
    SignOutFinished = true;
    navigate("/user");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { email, password };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");

    fetch("http://localhost/webservice/user/login", {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(account),
    }).then((response) => {
      console.log("Data sent");
      console.log(response.status);
      if (response.status === 200) {
        loginCheck.textContent = "logged in";
        fetch("http://localhost/webservice/user/login", {
          method: "POST",
          headers: requestHeaders,
          body: JSON.stringify(account),
        })
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData);
            ChangingUsername = responseData.name;
            id = responseData.id;
            ChangingSignedIn = true;
            Password = password;
            navigate("/");
          });
      }
      if (response.status === 400) {
        loginCheck.textContent = "User is not activated! Check your email!";
      }
      if (response.status === 404) {
        loginCheck.textContent = "User is not activated! Check your email!";
      }
    });
  };
  return (
    <>
      <Navbar />
      <h1 className="mx-auto h-40 w-40 font-bold text-indigo-600 justify-center text-4xl font-mono">
        Login
      </h1>
      <form className="max-w-40 text-center mx-auto " onSubmit={handleSubmit}>
        <label className={"font-mono"}>Email:</label>
        <input
          type="text"
          required
          className="bg-slate-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label className={"font-mono"}>Password:</label>
        <input
          type="text"
          required
          className="bg-slate-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className="h-10 text-center hover:bg-slate-600 sticky top-100  border ">
          Login
        </button>
        <p id="loginCheck"></p>
      </form>
    </>
  );
};

export {
  Signup,
  ChangingUsername,
  ChangingSignedIn,
  SignOutFinished,
  id,
  Password,
};
