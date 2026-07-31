interface Props {
  icon?: string;
}

/**
 * Placeholder glyph shown until real per-stratagem SVG icons are supplied.
 * Swap the switch below to render <img src={ICONS[icon]} /> once icon
 * assets exist (keyed by Stratagem.icon).
 */
export function StratagemIcon({ icon }: Props) {
  void icon;
  return (
    <svg viewBox="0 0 32 32" className="stratagem-icon__glyph" aria-hidden="true">
      <circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 9 L16 23 M9 16 L23 16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
