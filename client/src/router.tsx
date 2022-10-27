import { Logout } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import MyAccount from "./routes/MyAccount";
import Register from "./routes/Register";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/prihlaseni" element={<Login />} />
    <Route path="/registrace" element={<Register />} />
    <Route path="/nastaveni-uctu" element={<MyAccount />} />
    <Route path="/odhlaseni" element={<Logout />} />
  </Routes>
);

export default Router;
