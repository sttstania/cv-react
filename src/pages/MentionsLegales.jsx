import { Container, Accordion } from "react-bootstrap";

const MentionsLegales = () => {
  return (
    <Container className="mentions-container" style={{ margin: "100px" }}>
      <h1 className="page-title">Mentions légales</h1>
      <div
        style={{
          width: "20%",
          height: "4px",
          backgroundColor: "#0d6efd",
          margin: "0",
          left: 0,
          bottom: 0,
        }}
      ></div>

      <Accordion defaultActiveKey="0" className="accordion-section">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Éditeur du site</Accordion.Header>
          <Accordion.Body>
            <p><strong>John Doe</strong></p>
            <p>40 Rue Laure Diebold <br />69009 Lyon, France</p>
            <p>📞 <a href="tel:+33620304050" style={{ color: "#0d6efd" }}>06 20 30 40 50</a></p>
            <p>✉️ <a href="mailto:john.doe@gmail.com" style={{ color: "#0d6efd" }}>john.doe@gmail.com</a></p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Hébergeur</Accordion.Header>
          <Accordion.Body>
            <p><strong>Always Data</strong></p>
            <p>91 rue du Faubourg Saint Honoré<br />75008 Paris</p>
            <p>🌐 <a href="https://www.alwaysdata.com" style={{ color: "#0d6efd" }}>www.alwaysdata.com</a></p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Crédits</Accordion.Header>
          <Accordion.Body>
            <p>Site développé par John Doe, étudiant du CEF.</p>
            <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/" style={{ color: "#0d6efd" }}>Pixabay</a>.</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default MentionsLegales;