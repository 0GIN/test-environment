import { motion } from 'framer-motion';
import { Tag } from '../ui/Tag';
import { skillsData } from '../../data/skills';
import { SkillCategory } from '../../data/types';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <motion.section 
      id="skills"
      className={styles.skills}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <h2>Moje Umiejętności</h2>
        <div className={styles.categories}>
          {skillsData.map((category: SkillCategory, index: number) => (
            <motion.div 
              key={index} 
              className={styles.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>{category.category}</h3>
              <motion.div className={styles.tagContainer}>
                {category.skills.map((skill: string, skillIndex: number) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <Tag>{skill}</Tag>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
