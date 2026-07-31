import { Link } from "react-router-dom";
import type { Detachment } from "../types/detachment";
import { OBJECTIVE_MAP } from "../data/objectives";

interface Props {
  detachment: Detachment;
}

export function DetachmentCard({ detachment }: Props) {
  const objective = OBJECTIVE_MAP[detachment.primaryObjective];

  return (
    <Link
      className="detachment-card"
      style={{ ["--accent" as string]: objective.color }}
      to={`/${detachment.id}`}
    >
      <div className="detachment-card__badges">
        <span className="badge badge--objective">{objective.label}</span>
        <span className="badge badge--dp">{detachment.detachmentPoints} DP</span>
      </div>
      <h2 className="detachment-card__name">{detachment.name}</h2>
      <p className="detachment-card__tagline">{detachment.tagline}</p>
      <div className="detachment-card__footer">
        <span>{detachment.enhancements.length} améliorations</span>
        <span>{detachment.stratagems.length} stratagèmes</span>
      </div>
    </Link>
  );
}
