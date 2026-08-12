import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DetachmentPage } from "./pages/DetachmentPage";
import { DEFAULT_FACTION } from "./data/factions";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/${DEFAULT_FACTION}`} replace />} />
        <Route path="/:factionId" element={<Home />} />
        <Route path="/:factionId/:id" element={<DetachmentPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
