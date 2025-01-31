import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
import { Navbar } from "./components/Navbar";
const forgetActivate = () => {
  const [newPassword, setNewPassword] = useState("");
  const [searchParams] = useSearchParams();
  let code = searchParams.get("code");
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = { newPassword, code };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");

    fetch("http://localhost/webservice/user/ForgetPasswordReset", {
      method: "POST",
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
      <form onSubmit={handleSubmit}>
        <label className={"font-mono"}>Password:</label>
        <input
          type="text"
          required
          className="bg-slate-400"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        ></input>
        <button className="h-10 text-center hover:bg-slate-600 sticky top-100  border ">
          Change password
        </button>
      </form>
    </>
  );
};

export default forgetActivate;
