import { Link, Navigate, useParams } from "react-router-dom";
import { DETACHMENTS } from "../data/detachments";
import { OBJECTIVE_MAP } from "../data/objectives";
import { StratagemCard } from "../components/StratagemCard";

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

export function DetachmentPage() {
  const { id } = useParams();
  const detachment = DETACHMENTS.find((d) => d.id === id);

  if (!detachment) {
    return <Navigate to="/" replace />;
  }

  const objective = OBJECTIVE_MAP[detachment.primaryObjective];

  return (
    <div className="app">
      <Link to="/" className="back-link">
        ← Tous les détachements
      </Link>

      <div
        className="detail-page"
        style={{ ["--accent" as string]: objective.color }}
      >
        <header className="detail-header">
          <div className="detail-header__badges">
            <span className="badge badge--objective">{objective.label}</span>
            <span className="badge badge--dp">
              {detachment.detachmentPoints} DP
            </span>
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
                <StratagemCard
                  key={strat.name}
                  stratagem={strat}
                  detachmentName={detachment.name}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
