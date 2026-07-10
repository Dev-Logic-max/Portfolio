import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { label: string; href?: string };

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://devlogicmax.com";

/**
 * Accessible breadcrumb trail + BreadcrumbList JSON-LD (helps search ranking &
 * rich results). Pass the trail; the last item is the current page.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="container-page pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={i} className="flex items-center gap-1.5">
              {c.href && !last ? (
                <Link href={c.href} className="transition-colors hover:text-fg">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? "text-fg" : undefined} aria-current={last ? "page" : undefined}>
                  {c.label}
                </span>
              )}
              {!last && <ChevronRight className="size-3.5 opacity-50" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
