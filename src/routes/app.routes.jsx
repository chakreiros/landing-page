import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import LandingPage from "@/pages/LandingPage";
import Espacos from "@/pages/Espacos";
import SpacePage from "@/pages/SpacePage";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/espacos" element={<Espacos />} />
      <Route path="/espacos/:id" element={<SpacePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
