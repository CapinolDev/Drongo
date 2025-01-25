import React from "react";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
const Register = () => {
  let loginCheck = document.getElementById("loginCheck");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const activationUrl =
    window.location.href.toString().replace("register", "") + "activate";
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { email, password, name, activationUrl };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    fetch("http://localhost/webservice/user/register", {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(account),
    }).then((response) => {
      console.log("Data sent");
      console.log(response.status);
      if (response.status === 201) {
        loginCheck.textContent = "Registered!";
      }
      if (response.status === 400) {
        loginCheck.textContent = "Something wrong with Email! ";
      }
      if (response.status === 409) {
        loginCheck.textContent = "Another user with this name/email exists!";
      }
    });
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="">
        <h1 className="mx-auto h-40 w-40 font-bold text-indigo-600 justify-center text-4xl font-mono">
          Register
        </h1>
        <div className="flex">
          <form
            className="max-w-40 text-center mx-auto "
            onSubmit={handleSubmit}
          >
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
            <label className={"font-mono"}>Name:</label>
            <input
              type="text"
              required
              className="bg-slate-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <button className="h-10 text-center hover:bg-gray-400 sticky rounded-lg border border-black">
              Register
            </button>
            <p id="loginCheck"></p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
