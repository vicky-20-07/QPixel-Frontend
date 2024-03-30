import React from "react";
import { Routes, Route } from "react-router-dom";
import GetStarted from "./Components/GetStarted";
import Home from "./Components/Home";
import Login from "./Login";
import './App.css';
import Register from "./Register";
import Create from "./Components/Create";
import NoPage from "./Components/NoPage";
import Profile from "./Components/Profile";
import Notification from "./Components/Notification";
import HelpAndSupport from "./Components/HelpAndSupport";

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HelpAndSupport" element={<HelpAndSupport />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Create" element={<Create />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
  );
}
