import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Breadcrumbs, type Crumb } from "@/components/ui/breadcrumbs";

/** Standard wrapper for sub-pages: nav + scroll bar + breadcrumbs + footer. */
export function PageShell({
  crumbs,
  children,
}: {
  crumbs: Crumb[];
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Breadcrumbs items={crumbs} />
        {children}
      </main>
      <Footer />
    </>
  );
}
