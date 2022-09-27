import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import AllSongs from "./routes/AllSongs";
import FavoriteSongs from "./routes/FavoriteSongs";
import Login from "./routes/Login";
import Register from "./routes/Register";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/vsechny-pisnicky" element={<AllSongs />} />
    <Route path="/oblibene-pisnicky" element={<FavoriteSongs />} />
    <Route path="/prihlaseni" element={<Login />} />
    <Route path="/registrace" element={<Register />} />
  </Routes>
);

export default Router;
