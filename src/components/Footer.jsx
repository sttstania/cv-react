import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Bouton retour en haut
function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.scrollY > 400) {
        setShowScroll(true);
      } else if (showScroll && window.scrollY <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: "#EEE", color: "#444", padding: "20px 0" }}>
      <Container>
        <Row style={{ display: "flex", alignItems: "stretch" }}>
          {/* Première colonne: informations personnelles */}
          <Col md={6} lg={3} className="mt-md-4 mt-lg-0">
            <h5 style={{ color: "#1e1e1e" }}>John Doe</h5>
            <p>40 Rue Laure Diebold,<br />69009 Lyon, France<br />Téléphone: 06 20 30 40 50</p>
            <div>
              {/* Lien gitHub */}
              <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer" style={{ color: "#1e1e1e", margin: "10px" }}>
                <i className="fab fa-github fa-2x"></i>
              </a>
              {/* lien Twitter */}
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" style={{ color: "#1e1e1e", margin: "10px" }}>
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              {/* lien LinkedIn */}
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" style={{ color: "#1e1e1e", margin: "10px" }}>
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
            </div>
          </Col>
          {/* Deuxième colonne: Liens utiles */}
          <Col md={6} lg={3} className="mt-md-4 mt-lg-0">
            <h5 style={{ color: "#1e1e1e" }}>Liens utiles</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <NavLink to="/" style={{ color: "#444", textDecoration: "none" }}>Accueil</NavLink>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <NavLink to="/" style={{ color: "#444", textDecoration: "none" }}>À propos</NavLink>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <NavLink to="/Service" style={{ color: "#444", textDecoration: "none" }}>Services</NavLink>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <NavLink to="/MeContacter" style={{ color: "#444", textDecoration: "none" }}>Me Contacter</NavLink>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <NavLink to="/MentionsLegales" style={{ color: "#444", textDecoration: "none" }}>Mentions Légales</NavLink>
              </li>
            </ul>
          </Col>
          {/* Troisième colonne: Réalisations */}
          <Col md={6} lg={3} className="mt-md-4 mt-lg-0">
            <h5 style={{ color: "#1e1e1e" }}>Dernières Réalisations</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <a href="#" style={{ color: "#444", textDecoration: "none" }}>Fresh food</a>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <a href="#" style={{ color: "#444", textDecoration: "none" }}>Restaurant Akira</a>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <a href="#" style={{ color: "#444", textDecoration: "none" }}>Espace bien-être</a>
              </li>
            </ul>
          </Col>
          {/* Quatrième colonne: Articles */}
          <Col md={6} lg={3} className="mt-md-4 mt-lg-0">
            <h5 style={{ color: "#1e1e1e" }}>Mes derniers articles</h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <a href="#" style={{ color: "#444", textDecoration: "none" }}>Coder son site en HTML/CSS</a>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <a href="#" style={{ color: "#444", textDecoration: "none" }}>Vendre ses produits sur le web</a>
              </li>
              <li>
                <span style={{ color: "#0d6efd", fontWeight: "bold", marginRight: "5px" }}> &gt; </span>
                <a href="#" style={{ color: "#444", textDecoration: "none" }}>Se positionner sur Google</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* bouton pour remonter en haut */}
      <div style={{ backgroundColor: "##0d6efd", color: "#EEE", textAlign: "center", padding: "10px 0", width: "100vw", marginTop: "20px" }}>
        <p style={{ margin: 0 }}>&copy; Design by John Doe</p>
        {showScroll && (
          <button 
            onClick={scrollToTop} 
            style={{ 
              backgroundColor: "##298eff", 
              color: "#EEE", 
              border: "none", 
              padding: "12px 20px", 
              cursor: "pointer", 
              marginTop: "10px",
              borderRadius: "5px"
            }}
          >
            Remonter en haut
          </button>
        )}
      </div>
    </footer>
  );
}

export default Footer;
