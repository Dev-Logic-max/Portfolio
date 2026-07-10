import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { StudioHero } from "@/components/studio/studio-hero";
import { Services } from "@/components/sections/services";
import { ProcessScroll } from "@/components/sections/process-scroll";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Dev Logic Max — SaaS product studio",
  description:
    "Dev Logic Max is a senior-led software studio that builds and operates production SaaS: multi-tenant architecture, integrations, DevOps, and long-term reliability.",
  alternates: { canonical: "/studio" },
};

export default function StudioPage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <StudioHero />
        <Services />
        <ProcessScroll />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
