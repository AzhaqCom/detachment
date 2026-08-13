import type { Stratagem } from "../types/detachment";
import { getStratagemCategory } from "../data/stratagemCategories";
import { StratagemIcon } from "./StratagemIcon";
import { RulesText } from "./RulesText";

interface Props {
  stratagem: Stratagem;
  detachmentName: string;
}

export function StratagemCard({ stratagem, detachmentName }: Props) {
  const category = getStratagemCategory(detachmentName, stratagem.category);

  return (
    <div
      className="stratagem-card"
      style={{ ["--cat-color" as string]: category.color }}
    >
      <div className="stratagem-card__stripe" />
      <div className="stratagem-card__body">
        <div className="stratagem-card__title-row">
          <h3>{stratagem.name}</h3>
          <span className="stratagem-card__cost">{stratagem.cost}</span>
        </div>

        <div className="stratagem-card__band">
          <span>{category.label}</span>
          <span className="stratagem-card__icon">
            <StratagemIcon icon={stratagem.icon} />
          </span>
        </div>

        <div className="stratagem-card__field">
          <strong>WHEN:</strong> {stratagem.when}
        </div>
        <div className="stratagem-card__field">
          <strong>TARGET:</strong> {stratagem.target}
        </div>
        <div className="stratagem-card__field">
          <RulesText text={stratagem.effect} lead="EFFECT:" />
        </div>
        {stratagem.restrictions && (
          <div className="stratagem-card__field stratagem-card__restrictions">
            <strong>RESTRICTIONS:</strong> {stratagem.restrictions}
          </div>
        )}
      </div>
    </div>
  );
}
