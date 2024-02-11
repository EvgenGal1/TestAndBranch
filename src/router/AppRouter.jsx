import React from "react";
import { Routes, Route } from "react-router-dom";

import { MainPage } from "../pages/MainPage";
import { AboutPage } from "../pages/AboutPage";
import Users from "../users/Users";
import { UserDetalisPage } from "../pages/UserDetalisPage";
import { ErrorPage } from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UserDetalisPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
