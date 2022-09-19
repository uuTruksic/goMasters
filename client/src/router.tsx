import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Test from "./routes/TestFolder";

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/testFolder" element={<Test />} />
  </Routes>
);

export default Router;
