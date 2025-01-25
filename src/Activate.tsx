import React from "react";
import { useSearchParams } from "react-router-dom";
import { useMutation } from "react-query";
const Activate = () => {
  const [searchParams] = useSearchParams();

  let code = searchParams.get("code");

  const handleSubmit = (e) => {
    e.preventDefault();
    code = searchParams.get("code");
    const account = { code };

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");

    fetch("http://localhost/webservice/user/RegisterActivate?code=" + code, {
      method: "POST",
      headers: requestHeaders,
      body: "",
    }).then((response) => {
      console.log("Data sent");
      console.log(response.status);
    });
  };
  return (
    <>
      <button onClick={handleSubmit}>Activate</button>
    </>
  );
};

export default Activate;
