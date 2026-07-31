export interface StratagemCategoryInfo {
  label: string;
  color: string;
}

const CATEGORY_COLORS: Record<string, string> = {
  "Battle Tactic": "#8f2a35",
  "Strategic Ploy": "#2a5f7a",
  "Epic Deed": "#2f6b3f",
  Wargear: "#5c3a75",
};

const DEFAULT_COLOR = "#454b5c";

export function getStratagemCategory(
  detachmentName: string,
  category: string | undefined,
): StratagemCategoryInfo {
  if (!category || category === detachmentName) {
    return { label: `${detachmentName} Stratagem`, color: DEFAULT_COLOR };
  }
  return {
    label: `${detachmentName} — ${category} Stratagem`,
    color: CATEGORY_COLORS[category] ?? DEFAULT_COLOR,
  };
}
