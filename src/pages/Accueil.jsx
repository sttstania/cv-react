import { useState, useEffect, useCallback } from "react";
import { Container, Button } from "react-bootstrap";
import Competences from "./MesCompetences";

const mobile = "/assets/hero-bg-mobile.jpg";
const tablette = "/assets/hero-bg-tablette.jpg";
const desktop = "/assets/hero-bg.jpg";

function Accueil() {
  const [backgroundImage, setBackgroundImage] = useState(mobile);
  const [showAPropos, setShowAPropos] = useState(false);

  // Fonction pour mettre à jour l'image de fond
  const updateBackgroundImage = useCallback(() => {
    if (window.innerWidth < 768) {
      setBackgroundImage(mobile);
    } else if (window.innerWidth < 1025) {
      setBackgroundImage(tablette);
    } else {
      setBackgroundImage(desktop);
    }
  }, []);

  useEffect(() => {
    updateBackgroundImage(); // Appel initial
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, [updateBackgroundImage]);

  return (
    <>
      <section
        style={{
          position: "relative",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          padding: "0 20px",
        }}
      >
        {/* Overlay noir semi-transparent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.3,
            zIndex: 1,
          }}
        ></div>

        {/* Contenu du héros */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#EEE",
              textTransform: "none",
            }}
          >
            Bonjour, je suis John Doe
          </h1>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#EEE" }}>
            Développeur web full stack
          </h2>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setShowAPropos(true)}
            className="btn-en-savoir-plus"
          >
            En savoir plus
          </Button>
        </div>
      </section>

      {/* Section À Propos */}
      {showAPropos && (
        <Container
          id="a-propos"
          style={{
            marginTop: "40px",
            padding: "30px",
            background: "linear-gradient(to bottom, #FFF, #EEE)",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          }}
        >
          <div className="d-md-flex">
            <div className="w-100 w-md-50 me-md-4 mb-4 mb-md-0">
              <h2 style={{ position: "relative" }}>
                À propos
                <div
                  style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "#0d6efd",
                    margin: "8px 0 20px 0",
                    position: "absolute",
                    left: 0,
                    bottom: "-24px",
                  }}
                ></div>
              </h2>
              <div>
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
            </div>
            <div className="w-100 w-md-50">
              <Competences />
            </div>
          </div>
        </Container>
      )}
    </>
  );
}

export default Accueil;
