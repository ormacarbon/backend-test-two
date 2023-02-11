import { Routes } from "react-router";
import { Route } from "react-router-dom";
import Edit from "../pages/Edit";
import Home from "../pages/Home";
import New from "../pages/New";
import PaginatedItems from "../utils/PaginatedItems";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PaginatedItems itemsPerPage={2} />} />
      <Route path="/:id/edit" element={<Edit />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}

export default AppRoutes;