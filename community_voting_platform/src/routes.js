import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePoll from "./Pages/CreatePoll";
import PollDetails from "./Pages/PollDetails";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-poll" element={<CreatePoll />} />  {/* Route for CreatePoll page */}
      <Route path="/poll/:id" element={<PollDetails />} />
    </Routes>
  );
};

export default AppRoutes;
