import type { ObjectiveId } from "../types/detachment";
import { OBJECTIVES } from "../data/objectives";

interface Props {
  value: ObjectiveId | "all";
  onChange: (value: ObjectiveId | "all") => void;
}

export function ObjectiveFilter({ value, onChange }: Props) {
  return (
    <div className="objective-filter">
      <label htmlFor="objective-select">Objectif primaire</label>
      <select
        id="objective-select"
        value={value}
        onChange={(e) => onChange(e.target.value as ObjectiveId | "all")}
      >
        <option value="all">Tous les objectifs</option>
        {OBJECTIVES.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      <span
        className="objective-swatch"
        style={{
          background:
            value === "all"
              ? "transparent"
              : OBJECTIVES.find((o) => o.id === value)?.color,
        }}
      />
    </div>
  );
}
