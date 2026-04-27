import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ExpertiseSection } from '@/components/sections/ExpertiseSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StatsBar } from '@/components/sections/StatsBar';
import { TechStackSection } from '@/components/sections/TechStackSection';

export default function Home() {
  return (
    <div className="bg-background">
      <HeroSection />
      <StatsBar />
      <AboutSection />
      <ExpertiseSection />
      <ExperienceSection />
      <TechStackSection />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
    </div>
  );
}
