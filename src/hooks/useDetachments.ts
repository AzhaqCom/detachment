import { useEffect, useState } from "react";
import type { Detachment } from "../types/detachment";
import { loadDetachments, type FactionId } from "../data/factions";

interface Loaded {
  factionId: FactionId;
  detachments: Detachment[];
}

/** Returns null while the faction's codex is still loading. */
export function useDetachments(factionId: FactionId): Detachment[] | null {
  const [loaded, setLoaded] = useState<Loaded | null>(null);

  useEffect(() => {
    let active = true;
    loadDetachments(factionId).then((detachments) => {
      if (active) setLoaded({ factionId, detachments });
    });
    return () => {
      active = false;
    };
  }, [factionId]);

  // Tying the data to its faction keeps the previous codex from leaking into
  // the render that happens before the effect swaps it out.
  return loaded?.factionId === factionId ? loaded.detachments : null;
}
