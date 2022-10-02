import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/prihlaseni" element={<Login />} />
    <Route path="/registrace" element={<Register />} />
  </Routes>
);

export default Router;
