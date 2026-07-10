import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { HeroWebGL } from "@/components/hero/hero-webgl";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { Intro } from "@/components/sections/intro";
import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { DevOps } from "@/components/sections/devops";
import { Mobile } from "@/components/sections/mobile";
import { ProcessScroll } from "@/components/sections/process-scroll";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <HeroWebGL />
        <TrustMarquee />
        <Intro />
        <About />
        <FeaturedProjects />
        <DevOps />
        <Mobile />
        <ProcessScroll />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
