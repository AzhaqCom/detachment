import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import type { ObjectiveId } from "../types/detachment";
import {
  DEFAULT_FACTION,
  FACTION_MAP,
  isFactionId,
  type FactionId,
} from "../data/factions";
import { useDetachments } from "../hooks/useDetachments";
import { FactionFilter } from "../components/FactionFilter";
import { ObjectiveFilter } from "../components/ObjectiveFilter";
import { DetachmentCard } from "../components/DetachmentCard";

export function Home() {
  const { factionId: param } = useParams();
  const navigate = useNavigate();
  const known = isFactionId(param);
  const factionId: FactionId = known ? param : DEFAULT_FACTION;

  const detachments = useDetachments(factionId);
  const [objectiveFilter, setObjectiveFilter] = useState<ObjectiveId | "all">(
    "all",
  );

  const filtered = useMemo(() => {
    if (!detachments) return [];
    if (objectiveFilter === "all") return detachments;
    return detachments.filter((d) => d.primaryObjective === objectiveFilter);
  }, [detachments, objectiveFilter]);

  // Links shared before factions existed carried the detachment id alone.
  if (!known) {
    return <Navigate to={`/${DEFAULT_FACTION}/${param}`} replace />;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Détachements {FACTION_MAP[factionId].name}</h1>
        <p className="app-subtitle">
          Faction Pack — règles d'armée, stratagèmes et améliorations
        </p>
        <div className="filters">
          <FactionFilter value={factionId} onChange={(id) => navigate(`/${id}`)} />
          <ObjectiveFilter value={objectiveFilter} onChange={setObjectiveFilter} />
        </div>
      </header>

      {detachments === null ? (
        <p className="loading">Chargement des détachements…</p>
      ) : (
        <main className="detachment-grid">
          {filtered.map((d) => (
            <DetachmentCard key={d.id} detachment={d} factionId={factionId} />
          ))}
        </main>
      )}
    </div>
  );
}
