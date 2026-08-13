import { Fragment, type ReactNode } from "react";

interface Props {
  text: string;
  /** Field name printed before the first line, e.g. "EFFECT:". */
  lead?: string;
}

/** "Sower of Dread (Aura): While an enemy unit…" — the name is set in bold. */
const LABEL = /^([^:]{1,40}):\s+(.+)$/;

const CONNECTORS = new Set(["of", "the", "and", "in", "to", "a", "for"]);

/**
 * A label is a rule or ability name, so it reads as a title. This rejects
 * sentence fragments that merely happen to contain a colon, such as
 * "This unit's ranged attacks have: …".
 */
function isLabel(candidate: string): boolean {
  const words = candidate.split(" ");
  if (words.length > 5) return false;
  return words.every((word, i) => {
    const bare = word.replace(/[()]/g, "");
    if (!bare) return false;
    if (i > 0 && CONNECTORS.has(bare)) return true;
    return /^[A-Z0-9]/.test(bare);
  });
}

/**
 * Matches a bracketed weapon ability, or a run of upper-case words — the form
 * GW prints unit keywords in ("ADEPTUS ASTARTES INFANTRY", "MOB/KOMMANDOS",
 * "VON RYAN'S LEAPERS", "TYRANID WARRIORS WITH RANGED BIO-WEAPONS").
 */
const KEYWORD_RUN =
  /\[[^\]]*\]|\b[A-Z]{2,}(?:['-][A-Z]+)*(?:[ /][A-Z]{2,}(?:['-][A-Z]+)*)*\b/g;

/** Characteristic shorthands, not keywords: "-1 CP", "+1 AP", "improve its BS". */
const SHORTHAND = new Set(["CP", "AP", "WS", "BS", "OC", "DP", "HP"]);

/** Sets unit keywords in bold, leaving [WEAPON ABILITIES] and shorthands alone. */
function highlight(text: string): ReactNode {
  const nodes: ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(KEYWORD_RUN)) {
    const token = match[0];
    const start = match.index;
    if (start > cursor) nodes.push(text.slice(cursor, start));
    cursor = start + token.length;

    if (token.startsWith("[") || SHORTHAND.has(token)) {
      nodes.push(token);
    } else {
      nodes.push(
        <strong className="keyword" key={start}>
          {token}
        </strong>,
      );
    }
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes.length === 1 ? nodes[0] : nodes;
}

function Line({ text }: { text: string }): ReactNode {
  const match = text.match(LABEL);
  if (!match || !isLabel(match[1])) return highlight(text);
  return (
    <>
      <strong>{match[1]}:</strong> {highlight(match[2])}
    </>
  );
}

type Block =
  | { kind: "para"; text: string }
  | { kind: "list"; items: string[] };

/**
 * Rules text carries its structure in newlines, mirroring the printed pages:
 * a line ending in a colon introduces the lines below it, which GW prints as
 * bullets. Anything else is its own paragraph.
 */
function parse(text: string): Block[] {
  const blocks: Block[] = [];
  let open: Extract<Block, { kind: "list" }> | null = null;

  for (const line of text.split("\n").map((l) => l.trim()).filter(Boolean)) {
    if (line.endsWith(":")) {
      blocks.push({ kind: "para", text: line });
      open = { kind: "list", items: [] };
      blocks.push(open);
    } else if (open) {
      open.items.push(line);
    } else {
      blocks.push({ kind: "para", text: line });
    }
  }

  return blocks.filter((b) => b.kind === "para" || b.items.length > 0);
}

export function RulesText({ text, lead }: Props) {
  const blocks = parse(text);

  return (
    <>
      {blocks.map((block, i) =>
        block.kind === "list" ? (
          <ul className="rules-list" key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                <Line text={item} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="rules-para" key={i}>
            {i === 0 && lead && (
              <Fragment>
                <strong>{lead}</strong>{" "}
              </Fragment>
            )}
            <Line text={block.text} />
          </p>
        ),
      )}
    </>
  );
}
