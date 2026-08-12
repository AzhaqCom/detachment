import { useEffect, useState } from "react";
import type { Detachment } from "../types/detachment";
import { loadDetachments, type FactionId } from "../data/factions";

/** Returns null while the faction's codex is still loading. */
export function useDetachments(factionId: FactionId): Detachment[] | null {
  const [detachments, setDetachments] = useState<Detachment[] | null>(null);

  useEffect(() => {
    let active = true;
    setDetachments(null);
    loadDetachments(factionId).then((data) => {
      if (active) setDetachments(data);
    });
    return () => {
      active = false;
    };
  }, [factionId]);

  return detachments;
}
