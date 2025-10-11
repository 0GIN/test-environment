import { HashLink } from 'react-router-hash-link';
import { useTheme } from '../../hooks/useTheme';
import styles from './Header.module.css';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <HashLink smooth to="#" className={styles.logo}>
          JO
        </HashLink>
        
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li>
              <HashLink smooth to="#about" className={styles.navLink}>
                O mnie
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#skills" className={styles.navLink}>
                Umiejętności
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#projects" className={styles.navLink}>
                Projekty
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact" className={styles.navLink}>
                Kontakt
              </HashLink>
            </li>
          </ul>
          
          <button 
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label="Przełącz motyw"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      </div>
    </header>
  );
}
