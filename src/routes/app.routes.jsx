import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import LandingPage from "@/pages/LandingPage";
import Spaces from "@/pages/Spaces";
import SpacePage from "@/pages/SpacePage";
import NotFound from "@/pages/NotFound";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/spaces" element={<Spaces />} />
      <Route path="/spaces/:id" element={<SpacePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
