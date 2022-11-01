import { Logout } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import MyAccount from "./routes/MyAccount";
import Register from "./routes/Register";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/my-account" element={<MyAccount />} />
    <Route path="/logoff" element={<Logout />} />
  </Routes>
);

export default Router;
