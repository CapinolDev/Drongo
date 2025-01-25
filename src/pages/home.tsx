import React from "react";
import Welcome from "../components/welcome";
import { Navbar } from "../components/navbar";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Navbar />
      <Welcome></Welcome>
      <h1>Home page</h1>
    </>
  );
};

export default Home;
