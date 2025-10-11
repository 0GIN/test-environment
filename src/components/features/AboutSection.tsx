import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

export function AboutSection() {
  return (
    <motion.section 
      id="about"
      className={`${styles.about} section`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img 
              src="https://placehold.co/300x300/64ffda/121212?text=Twoje+Zdjecie" 
              alt="Jan Ogiński"
              className={styles.image}
            />
          </div>
          <div className={styles.textContent}>
            <h2>O mnie</h2>
            <p>
              Obecnie odbywam praktyki jako Programista front-end w Mapmaker.online, gdzie 
              koncentruję się na projektowaniu oprogramowania w dynamicznym środowisku technologicznym. 
              Jestem studentem Informatyki Ekonomicznej na Uniwersytecie Łódzkim.
            </p>
            <p>
              Specjalizuję się w technologiach frontend, ze szczególnym uwzględnieniem React, 
              TypeScript oraz HTML5/CSS. Moja rola wymaga stosowania umiejętności związanych 
              z przemysłem oprogramowania oraz rozwiązywania wyzwań technologicznych.
            </p>
            <p>
              Każdy projekt traktuję jako okazję do nauki i doskonalenia swoich umiejętności. 
              Wierzę w tworzenie intuicyjnych interfejsów użytkownika, które łączą estetykę 
              z funkcjonalnością i wydajnością.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
