import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import LandingPage from "@/pages/LandingPage";
import Spaces from "@/pages/Spaces";
import SpacePage from "@/pages/SpacePage";
import Status from "@/pages/api/v1/status";
import NotFound from "@/pages/NotFound";
import Register from "@/pages/Register";
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/status" element={<Status />} />
      <Route path="/spaces" element={<Spaces />} />
      <Route path="/spaces/:id" element={<SpacePage />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
