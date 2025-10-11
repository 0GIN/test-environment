import { HeroSection } from '../components/features/HeroSection';
import { AboutSection } from '../components/features/AboutSection';
import { SkillsSection } from '../components/features/SkillsSection';
import { ProjectsSection } from '../components/features/ProjectsSection';
import { ContactSection } from '../components/features/ContactSection';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
