import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import TopRated from "../pages/TopRated";
import Upcoming from "../pages/Upcoming";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Specific paths for movie types */}
      <Route path="/popular" element={<Popular />} />
      <Route path="/top_rated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />

      {/* <Route path="/:category" element={<Home />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} /> */}
      <Route
        path="*"
        element={<div> Not Found or You do not have permission.</div>}
      />
    </Routes>
  );
};

export default Router;
