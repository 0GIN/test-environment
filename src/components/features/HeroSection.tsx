import { motion } from 'framer-motion';
import { AnimatedHeading } from '../ui/AnimatedHeading';
import { Button } from '../ui/Button';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.content}>
        <AnimatedHeading text="Cześć, jestem Jan Ogiński" />
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Frontend Developer | React & TypeScript | Student Informatyki Ekonomicznej
        </motion.p>
        <motion.div 
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Button onClick={() => scrollToSection('projects')}>
            Zobacz moje projekty
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('contact')}>
            Skontaktuj się
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
