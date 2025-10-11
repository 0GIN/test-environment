import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Tag } from '../ui/Tag';
import { projectsData } from '../../data/projects';
import { Project } from '../../data/types';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {
  return (
    <motion.section 
      id="projects"
      className={`${styles.projects} section`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2>Moje Projekty</h2>
        <div className={styles.grid}>
          {projectsData.map((project: Project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className={styles.projectCard}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className={styles.projectImage}
                />
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech: string, index: number) => (
                    <Tag key={index}>{tech}</Tag>
                  ))}
                </div>
                <div className={styles.links}>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      🔗 Live Demo
                    </a>
                  )}
                  <a 
                    href={project.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    💻 GitHub
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
