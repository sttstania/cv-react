import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import Competences from "./MesCompetences";

const mobile = "/assets/hero-bg-mobile.jpg";
const tablette = "/assets/hero-bg-tablette.jpg";
const desktop = "/assets/hero-bg.jpg";

function Accueil() {
  const [backgroundImage, setBackgroundImage] = useState(mobile);
  const [showAPropos, setShowAPropos] = useState(false);

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

    window.addEventListener("resize", updateBackgroundImage);
    updateBackgroundImage(); // Initial call

    return () => window.removeEventListener("resize", updateBackgroundImage);
  }, []);

  return (
    <>
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
        }}
      >
        <div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#EEE" }}>
            Bonjour, je suis John Doe
          </h1>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#EEE" }}>
            Développeur web full stack
          </h2>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowAPropos(true)}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0d6efd")}
          >
            En savoir plus
          </Button>
        </div>
      </section>
      {showAPropos && (
        <Container id="a-propos" style={{ marginTop: "40px", padding: "30px" }}>
          <h2>À propos</h2>
          <div style={{ width: "50px", height: "4px", backgroundColor: "#0d6efd", margin: "8px 0 20px 0" }}></div>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ flex: 1 }}>
              <p>
                Passionné par l&apos;informatique et les nouvelles technologies, j&apos;ai suivi une formation d&apos;
                <strong>intégrateur-développeur web</strong> au CESI. Au cours de cette formation, j&apos;ai acquis des bases solides pour travailler dans le domaine du <strong>développement web.</strong>
              </p>
              <p>
                Basé à Lyon, je suis en recherche d&apos;une alternance au sein d&apos;une agence digitale pour construire mon expérience en tant que <strong>développeur web full stack.</strong>
              </p>
              <p>
                J&apos;accorde une attention particulière à la qualité du code que j&apos;écris et je respecte les bonnes pratiques du web.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <Competences />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Accueil;
