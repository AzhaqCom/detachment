import { useEffect } from "react";
import type { Detachment } from "../types/detachment";
import { OBJECTIVE_MAP } from "../data/objectives";

interface Props {
  detachment: Detachment;
  onClose: () => void;
}

function TextBlock({ text }: { text: string }) {
  const paragraphs = text.split("\n").filter(Boolean);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </>
  );
}

export function DetachmentDetail({ detachment, onClose }: Props) {
  const objective = OBJECTIVE_MAP[detachment.primaryObjective];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div
        className="detail-panel"
        style={{ ["--accent" as string]: objective.color }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="detail-close" onClick={onClose} aria-label="Fermer">
          ✕
        </button>

        <header className="detail-header">
          <div className="detail-header__badges">
            <span className="badge badge--objective">{objective.label}</span>
            <span className="badge badge--dp">{detachment.detachmentPoints} DP</span>
          </div>
          <h1>{detachment.name}</h1>
          <p className="detail-tagline">{detachment.tagline}</p>
          {detachment.description && (
            <p className="detail-description">{detachment.description}</p>
          )}
          {detachment.restrictions && (
            <p className="detail-restrictions">{detachment.restrictions}</p>
          )}
        </header>

        <section className="detail-section">
          <h2>Règle(s) d'armée</h2>
          {detachment.rules.map((rule) => (
            <div className="rule-block" key={rule.name}>
              <h3>{rule.name}</h3>
              {rule.flavorText && <p className="flavor">{rule.flavorText}</p>}
              <TextBlock text={rule.effect} />
            </div>
          ))}
          {detachment.keywordsNote && (
            <div className="rule-block">
              <h3>Mots-clés</h3>
              <TextBlock text={detachment.keywordsNote} />
            </div>
          )}
        </section>

        <section className="detail-section">
          <h2>Améliorations ({detachment.enhancements.length})</h2>
          <div className="enhancement-grid">
            {detachment.enhancements.map((enh) => (
              <div className="enhancement-card" key={enh.name}>
                <div className="enhancement-card__top">
                  <h3>{enh.name}</h3>
                  <span className="points">{enh.points} pts</span>
                </div>
                <p className="flavor">{enh.flavorText}</p>
                <p className="restriction">{enh.restriction}</p>
                {enh.effect && <TextBlock text={enh.effect} />}
                {enh.weaponProfile && (
                  <table className="weapon-table">
                    <thead>
                      <tr>
                        <th>{enh.weaponProfile.name}</th>
                        <th>A</th>
                        <th>WS/BS</th>
                        <th>S</th>
                        <th>AP</th>
                        <th>D</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {enh.weaponProfile.range}
                          {enh.weaponProfile.abilities
                            ? ` ${enh.weaponProfile.abilities}`
                            : ""}
                        </td>
                        <td>{enh.weaponProfile.attacks}</td>
                        <td>{enh.weaponProfile.skill}</td>
                        <td>{enh.weaponProfile.strength}</td>
                        <td>{enh.weaponProfile.ap}</td>
                        <td>{enh.weaponProfile.damage}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        </section>

        {detachment.stratagems.length > 0 && (
          <section className="detail-section">
            <h2>Stratagèmes ({detachment.stratagems.length})</h2>
            <div className="stratagem-grid">
              {detachment.stratagems.map((strat) => (
                <div className="stratagem-card" key={strat.name}>
                  <div className="stratagem-card__top">
                    <h3>{strat.name}</h3>
                    <span className="cp">{strat.cost}</span>
                  </div>
                  {strat.category && (
                    <p className="category">
                      {strat.category === detachment.name
                        ? `${detachment.name} Stratagem`
                        : `${detachment.name} — ${strat.category} Stratagem`}
                    </p>
                  )}
                  <p className="flavor">{strat.flavorText}</p>
                  <dl>
                    <dt>WHEN</dt>
                    <dd>{strat.when}</dd>
                    <dt>TARGET</dt>
                    <dd>{strat.target}</dd>
                    <dt>EFFECT</dt>
                    <dd>{strat.effect}</dd>
                  </dl>
                  {strat.restrictions && (
                    <p className="restriction">{strat.restrictions}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
