import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const mobile = "/assets/hero-bg-mobile.jpg";
const tablette = "/assets/hero-bg-tablette.jpg";
const desktop = "/assets/hero-bg.jpg";

function Accueil() {
  const [backgroundImage, setBackgroundImage] = useState(mobile);

  useEffect(() => {
    const updateBackgroundImage = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(mobile);
      } else if (window.innerWidth < 1025) {
        setBackgroundImage(tablette);
      } else {
        setBackgroundImage(desktop);
      }
    };

    window.addEventListener('resize', updateBackgroundImage);
    updateBackgroundImage(); // Initial call

    return () => window.removeEventListener('resize', updateBackgroundImage);
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Couvre toute la section
          backgroundPosition: "center", // Centre l'image
          backgroundRepeat: "no-repeat", // Ne répète pas l'image
          height: "100vh", // Hauteur pleine de la fenêtre
          width: "100vw", // Largeur pleine de la fenêtre
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#EEE"}}>
                Bonjour, je suis John Doe
              </h1>
              <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#EEE" }}>
                Développeur web full stack
              </h2>
              <Button
                variant="primary"
                size="lg"
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
              >
                En savoir plus
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
      <div>
        <section>
          <h2>À propos</h2>
          <p>
          Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi une formation d&apos;<strong>intégrateur-développeur web</strong> au CESI. Au cours de cette formation, j&apos;ai acquis des bases solides pour travailler dans le domaine du <strong>développement web.</strong>
        </p>
        <p>
          Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour construire mon expérience en tant que <strong>développeur web full stack.</strong>
        </p>
        <p>
          J&apos;accorde une attention particulière à la qualité du code que j&apos;écris et je respecte les bonnes pratiques du web.
        </p>
        </section>
        <div>
          <h3>Mes compétences</h3>
          <ul>

          </ul>
        </div>
      </div>
    </>
  );
}

export default Accueil;
