import type { ObjectiveId } from "../types/detachment";

export interface ObjectiveInfo {
  id: ObjectiveId;
  label: string;
  color: string;
}

export const OBJECTIVES: ObjectiveInfo[] = [
  { id: "purge-the-foe", label: "Purge the Foe", color: "#a3283b" },
  { id: "take-and-hold", label: "Take and Hold", color: "#3d7a4e" },
  { id: "priority-assets", label: "Priority Assets", color: "#b8862f" },
  { id: "reconnaissance", label: "Reconnaissance", color: "#1f7d76" },
  { id: "disruption", label: "Disruption", color: "#2f4166" },
];

export const OBJECTIVE_MAP: Record<ObjectiveId, ObjectiveInfo> =
  Object.fromEntries(OBJECTIVES.map((o) => [o.id, o])) as Record<
    ObjectiveId,
    ObjectiveInfo
  >;
