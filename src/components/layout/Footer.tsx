import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        <p className={styles.copyright}>
          © {currentYear} Jan Ogiński. Wszystkie prawa zastrzeżone.
        </p>
        
        <ul className={styles.socialLinks}>
          <li>
            <a 
              href="https://github.com/0GIN" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub"
            >
              <span role="img" aria-label="GitHub">💻</span>
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/jan-oginski/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn"
            >
              <span role="img" aria-label="LinkedIn">💼</span>
            </a>
          </li>
          <li>
            <a 
              href="mailto:janoginski@example.com"
              className={styles.socialLink}
              aria-label="Email"
            >
              <span role="img" aria-label="Email">📧</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
