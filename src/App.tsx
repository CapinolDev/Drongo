import React from "react";
import { Signup } from "./signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./Register";
import { User } from "./user";
import Activate from "./Activate";
const App = () => {
  return (
    <>
      <div className="App">
        <div className="Content">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Signup />} />
              <Route path="/register" element={<Register />} />
              <Route path="/user" element={<User />} />
              <Route path="/activate" element={<Activate />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
