import React from "react";
import { Signup } from "./signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./Register";
import { User } from "./user";
import Activate from "./Activate";
import ForgetPass from "./forgetpass";
import ForgetActivate from "./forgetActivate";
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
              <Route path="/forget" element={<ForgetPass />} />
              <Route path="/forgetAct" element={<ForgetActivate />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
};

export default App;
