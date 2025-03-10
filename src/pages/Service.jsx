import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaCode, FaSearch } from 'react-icons/fa';
import Banner from './banner';

const Services = () => {
  return (
    <Container className="py-4">
      <Banner />
      <h1 className="text-center mb-4">MON OFFRE DE SERVICES</h1>
      <p className="text-center text-muted mb-4">
        Voici les prestations sur lesquelles je peux intervenir.
      </p>
      {/* Ligne de séparation */}
      <div 
          style={{
          width: "20%",
          height: "4px",
          backgroundColor: "#0d6efd",
          margin: "24px auto"
          }}
      ></div>
      <Row className="justify-content-center">
        {/* UX Design */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card style={{ textAlign: 'left' }}>
            <Card.Body>
              <FaLaptopCode size={50} className="mb-3 icon" /> {/* Ajout de la classe icon */}
              <Card.Title>UX DESIGN</Card.Title>
              <Card.Text>
                L’UX Design est une méthode de conception centrée sur l’utilisateur. Son but est d’offrir la meilleure expérience possible en optimisant l’ergonomie et l’interactivité.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Développement Web */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card style={{ textAlign: 'left' }}>
            <Card.Body>
              <FaCode size={50} className="mb-3 icon" /> {/* Ajout de la classe icon */}
              <Card.Title>DÉVELOPPEMENT WEB</Card.Title>
              <Card.Text>
                Le développement de sites web repose sur la maîtrise des langages HTML, CSS, JavaScript et PHP.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Référencement */}
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card style={{ textAlign: 'left' }}>
            <Card.Body>
              <FaSearch size={50} className="mb-3 icon" /> {/* Ajout de la classe icon */}
              <Card.Title>RÉFÉRENCEMENT</Card.Title>
              <Card.Text>
                Le référencement naturel d’un site, aussi appelé SEO, regroupe l’ensemble des techniques mises en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Services;
