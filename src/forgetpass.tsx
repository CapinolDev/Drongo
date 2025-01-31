import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
const ForgetPass = () => {
  const [email, setEmail] = useState("");
  const activationUrl =
    window.location.href.toString().replace("forget", "") + "forgetAct  ";
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { email };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");

    fetch(
      "http://localhost/webservice/user/ForgetPassword?email=" +
        email +
        "&forgotPasswordUrl=" +
        activationUrl,
      {
        method: "POST",
        headers: requestHeaders,
        body: "",
      }
    ).then((response) => {
      console.log("Data sent");
      console.log(response.status);
    });
  };
  return (
    <>
      <Navbar></Navbar>
      <form onSubmit={handleSubmit} className="max-w-40 text-center mx-auto">
        <div className="flex justify-center mx-auto">
          <label className={"font-mono"}>Email:</label>

          <input
            type="text"
            required
            className="bg-slate-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <button className="h-10 text-center hover:bg-slate-600 sticky top-100  border ">
            Proceed
          </button>
        </div>
      </form>
    </>
  );
};

export default ForgetPass;
