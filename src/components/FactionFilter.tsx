import { FACTIONS, type FactionId } from "../data/factions";

interface Props {
  value: FactionId;
  onChange: (value: FactionId) => void;
}

export function FactionFilter({ value, onChange }: Props) {
  return (
    <div className="filter">
      <label htmlFor="faction-select">Faction</label>
      <select
        id="faction-select"
        value={value}
        onChange={(e) => onChange(e.target.value as FactionId)}
      >
        {FACTIONS.map((f) => (
          <option key={f.id} value={f.id}>
            {f.name}
          </option>
        ))}
      </select>
    </div>
  );
}
