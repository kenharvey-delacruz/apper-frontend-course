import { Route, Routes, useNavigate } from "react-router-dom";
import Popular from "../pages/Popular";
import TopRated from "../pages/TopRated";
import Upcoming from "../pages/Upcoming";
import TermsOfServices from "../pages/TermsOfServices";
import { useEffect } from "react";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RedirectToPopular />} />

      <Route path="/popular" element={<Popular />} />
      <Route path="/top_rated" element={<TopRated />} />
      <Route path="/upcoming" element={<Upcoming />} />

      <Route path="/terms_of_services" element={<TermsOfServices />} />
      {/* <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category/search/:keyword" element={<Catalog />} /> */}
      <Route
        path="*"
        element={<div> Not Found or You do not have permission.</div>}
      />
    </Routes>
  );
};

const RedirectToPopular = () => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/popular");
  }, [navigate]);
  return null;
};

export default Router;
