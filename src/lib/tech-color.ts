/**
 * Some brand colors (Next.js/Express/Vercel = #000, some = #fff) vanish against
 * one theme. This returns a CSS color that stays visible in BOTH themes:
 * near-black/near-white brands fall back to the theme's foreground token;
 * everything else keeps its real brand color.
 *
 * Returns a value safe to drop into `style={{ color }}`.
 */
export function techColor(brand: string): string {
  const hex = brand.replace("#", "").toLowerCase();
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  // perceived luminance
  const lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (lum < 0.12 || lum > 0.92) return "var(--fg)"; // too dark or too light → adapt
  return brand;
}
