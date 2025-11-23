import { useTranslation } from '../i18n/LanguageContext';

function TechStack() {
  const { t } = useTranslation();

  const techCategories = [
    { titleKey: 'techStack.devEnvironment', skills: ['Linux', 'Git', 'GitHub', 'VS Code'] },
    { titleKey: 'techStack.frontend', skills: ['HTML & CSS', 'Design Fundamentals', 'SCSS', 'Bootstrap', 'JavaScript', 'DOM Manipulation', 'React', 'Vite', 'ESM Modules'] },
    { titleKey: 'techStack.backend', skills: ['Node.js', 'NPM', 'Express.js', 'REST API', 'MongoDB', 'Mongoose'] },
    { titleKey: 'techStack.programmingConcepts', skills: ['OOP', 'Functional Programming', 'Algorithms', 'Data Structures', 'Fetch API', 'Promises'] },
    { titleKey: 'techStack.specializations', skills: ['Three.js', 'Cybersecurity', 'JWT Auth', 'Cookies & Sessions'] },
  ];

  return (
    <section className="tech-stack">
      <div className="container">
        <h2 className="tech-stack__title">
          <span className="text-accent">&gt;</span> {t('techStack.title')}
        </h2>

        <div className="tech-stack__grid">
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category retro-box">
              <h3 className="tech-category__title">{t(category.titleKey)}</h3>
              <div className="tech-category__skills">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-stack__highlight retro-box">
          <h3>{t('techStack.currentlyLearning')}</h3>
          <p>{t('techStack.currentlyLearningText')}</p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
