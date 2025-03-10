import { Container, Row, Col, Accordion } from "react-bootstrap";
import { MdPlace } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";

const MentionsLegales = () => {
  return (
    <Container className="mentions-container" style={{ margin: "100px" }}>
      <h1 className="page-title text-center">Mentions légales</h1>
      <div
        style={{
          width: "20%",
          height: "4px",
          backgroundColor: "#0d6efd",
          margin: "0 auto",
        }}
      ></div>

      {/* Grille responsive */}
      <Row className="mt-4">
        {/* Colonne 1 - Éditeur du site */}
        <Col xs={12} md={4} className="mb-4">
          <Accordion defaultActiveKey="0" className="accordion-section">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Éditeur du site</Accordion.Header>
              <Accordion.Body>
                <p><strong>John Doe</strong></p>
                <p><MdPlace />40 Rue Laure Diebold <br />69009 Lyon, France</p>
                <p><IoIosPhonePortrait /><a href="tel:+33620304050" style={{ color: "#0d6efd" }}>06 20 30 40 50</a></p>
                <p><IoMdMail /><a href="mailto:john.doe@gmail.com" style={{ color: "#0d6efd" }}>john.doe@gmail.com</a></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Colonne 2 - Hébergeur */}
        <Col xs={12} md={4} className="mb-4">
          <Accordion defaultActiveKey="1" className="accordion-section">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Hébergeur</Accordion.Header>
              <Accordion.Body>
                <p><strong>Always Data</strong></p>
                <p>91 rue du Faubourg Saint Honoré<br />75008 Paris</p>
                <p><FaGlobe /> <a href="https://www.alwaysdata.com" style={{ color: "#0d6efd" }}>www.alwaysdata.com</a></p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>

        {/* Colonne 3 - Crédits */}
        <Col xs={12} md={4} className="mb-4">
          <Accordion defaultActiveKey="2" className="accordion-section">
            <Accordion.Item eventKey="2">
              <Accordion.Header>Crédits</Accordion.Header>
              <Accordion.Body>
                <p>Site développé par John Doe, étudiant du CEF.</p>
                <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" style={{ color: "#0d6efd" }}>Pixabay</a>.</p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default MentionsLegales;
