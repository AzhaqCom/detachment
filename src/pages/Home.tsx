import { useMemo, useState } from "react";
import type { ObjectiveId } from "../types/detachment";
import { DETACHMENTS } from "../data/detachments";
import { ObjectiveFilter } from "../components/ObjectiveFilter";
import { DetachmentCard } from "../components/DetachmentCard";

export function Home() {
  const [objectiveFilter, setObjectiveFilter] = useState<ObjectiveId | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    if (objectiveFilter === "all") return DETACHMENTS;
    return DETACHMENTS.filter((d) => d.primaryObjective === objectiveFilter);
  }, [objectiveFilter]);

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
          <DetachmentCard key={d.id} detachment={d} />
        ))}
      </main>
    </div>
  );
}
