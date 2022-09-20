import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Register from "./routes/Register";
import Login from "./routes/Login";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
);

export default Router;
