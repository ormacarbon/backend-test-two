import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Edit from "../pages/Edit";
import Home from "../pages/Home";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id/edit" element={<Edit />} />
    </Routes>
  );
}

export default AppRoutes;