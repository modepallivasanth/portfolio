import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content container">
        <p className="footer-text">
          © {year}{' '}
          <a href="#top">Vasanth Kumar Modepalli</a>. All rights reserved.
        </p>
        <p className="footer-built">Built with React</p>
      </div>
    </footer>
  );
}
