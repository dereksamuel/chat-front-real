import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import { HomePage } from "./routes/home/HomePage.jsx";
import { LoginPage } from "./routes/session/LoginPage.jsx";
import { ProfilePage } from "./routes/session/ProfilePage.jsx";
import { NotFoundPage } from "./routes/common/NotFoundPage.jsx";
import "./index.css";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
