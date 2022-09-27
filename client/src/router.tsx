import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import AllSongs from "./routes/AllSongs";
import FavoriteSongs from "./routes/FavoriteSongs";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/vsechny-pisnicky" element={<AllSongs />} />
    <Route path="/oblibene-pisnicky" element={<FavoriteSongs />} />
  </Routes>
);

export default Router;
