import { useTranslation } from '../i18n/LanguageContext';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Midgard Tattoo Studio',
      descriptionKey: 'projects.midgardDesc',
      roleKey: 'projects.midgardRole',
      tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Project Name 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A modern web application built with cutting-edge technologies.',
      role: 'Frontend Developer',
      tech: ['React', 'SCSS', 'REST API'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Project Name 3',
      description: 'An innovative solution for [problem]. Features include [feature 1], [feature 2], and [feature 3].',
      role: 'Full-Stack Developer',
      tech: ['Phaser.js', 'Node.js', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__title">
          <span className="text-accent">&gt;</span> {t('projects.title')}
        </h2>

        <div className="projects__grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card__image-wrapper">
                <div className="project-card__image-placeholder">
                  <span>Screenshot</span>
                </div>
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.descriptionKey ? t(project.descriptionKey) : project.description}
                </p>

                <div className="project-card__role">
                  <strong>{t('projects.role')}</strong> {project.roleKey ? t(project.roleKey) : project.role}
                </div>

                <div className="project-card__tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="retro-btn">
                    {t('projects.liveDemo')}
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="retro-btn retro-btn--secondary">
                    {t('projects.github')}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
