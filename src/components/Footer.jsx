function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="mailto:dev.christophklemtz@outlook.com" className="footer__link">Email</a>
          <a href="https://github.com/ChrisKlemtz" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
          <a href="https://www.linkedin.com/in/christoph-klemtz-8558b8349/" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
        </div>

        <div className="footer__info">
          <p className="footer__copy">
            <span className="text-accent">&copy;</span> {currentYear} Christoph Klemtz
          </p>
          <p className="footer__tagline">
            Crafted with <span className="blink text-accent">♥</span> and pixels
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
