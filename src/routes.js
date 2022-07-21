import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/Home";

const AllRoutes = (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

export default AllRoutes;
