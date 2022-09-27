import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/vsechny-pisnicky" element={<Home />} />
    <Route path="/oblibene-pisnicky" element={<Home />} />
  </Routes>
);

export default Router;
