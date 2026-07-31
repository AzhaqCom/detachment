import { useMemo, useState } from "react";
import type { ObjectiveId } from "./types/detachment";
import { DETACHMENTS } from "./data/detachments";
import { ObjectiveFilter } from "./components/ObjectiveFilter";
import { DetachmentCard } from "./components/DetachmentCard";
import { DetachmentDetail } from "./components/DetachmentDetail";
import "./App.css";

function App() {
  const [objectiveFilter, setObjectiveFilter] = useState<ObjectiveId | "all">(
    "all",
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (objectiveFilter === "all") return DETACHMENTS;
    return DETACHMENTS.filter((d) => d.primaryObjective === objectiveFilter);
  }, [objectiveFilter]);

  const selected = DETACHMENTS.find((d) => d.id === selectedId) ?? null;

  return (
    <div className="app">
      <header className="app-header">
        <h1>Détachements Space Marines</h1>
        <p className="app-subtitle">
          Faction Pack — règles d'armée, stratagèmes et améliorations
        </p>
        <ObjectiveFilter value={objectiveFilter} onChange={setObjectiveFilter} />
      </header>

      <main className="detachment-grid">
        {filtered.map((d) => (
          <DetachmentCard key={d.id} detachment={d} onSelect={setSelectedId} />
        ))}
      </main>

      {selected && (
        <DetachmentDetail
          detachment={selected}
          onClose={() => setSelectedId(null)}
        />
      )}
    </div>
  );
}

export default App;
