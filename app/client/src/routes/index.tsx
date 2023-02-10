import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import New from "../pages/New";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id/edit" element={<Edit />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}

export default AppRoutes;