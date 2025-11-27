import { useTranslation } from '../i18n/LanguageContext';

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: 'Tile.me Website Remake',
      image: '/assets/projects/projectScreenshot_Tile.me-website2.png',
      descriptionKey: 'projects.tileMeDesc',
      roleKey: 'projects.tileMeRole',
      tech: ['React', 'Vite', 'Tailwind CSS', 'Responsive Design'],
      liveUrl: 'https://tile-me-website-remake.vercel.app/',
      githubUrl: 'https://github.com/ChrisKlemtz/Tile.me-Website_Remake',
    },
    {
      id: 2,
      title: 'AI-Collect (Multi-AI Hub)',
      image: '/assets/projects/projectScreenshot_AI-Multi-Tool.png',
      descriptionKey: 'projects.aiCollectDesc',
      roleKey: 'projects.aiCollectRole',
      tech: ['React', 'TypeScript', 'Vite', 'SCSS', 'OpenAI API', 'Anthropic API', 'DeepSeek API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ChrisKlemtz/AI-Collect',
    },
    {
      id: 3,
      title: 'Midgard Tattoo Studio - Website',
      image: '/assets/projects/projectScreenshot_Midgard-Tattoo-Website.png',
      descriptionKey: 'projects.midgardDesc',
      roleKey: 'projects.midgardRole',
      tech: ['React', 'Node.js', 'JavaScript', 'CSS', 'SCSS'],
      liveUrl: 'https://midgard-final.vercel.app/',
      githubUrl: 'https://github.com/ChrisKlemtz/Midgard_FINAL',
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
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-card__image" />
                ) : (
                  <div className="project-card__image-placeholder">
                    <span>Screenshot</span>
                  </div>
                )}
                <span className="project-card__badge">{t('projects.inProgress')}</span>
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
