import { Container, Row, Col, Card } from 'react-bootstrap';
import Banner from './banner';

const Realisation = () => {
    const projects = [
        {
            title: "Fresh food",
            description: "Réalisation d’un site avec commande en ligne.",
            tech: "Site réalisé avec PHP et MySQL.",
            image: "/assets/portfolio/fresh-food.jpg",
            link: "path_to_fresh_food_site",
        },
        {
            title: "Restaurant Akira",
            description: "Réalisation d’un site vitrine.",
            tech: "Site réalisé avec WordPress.",
            image: "/assets/portfolio/restaurant-japonais.jpg",
            link: "path_to_akira_site",
        },
        {
            title: "Espace bien-être",
            description: "Réalisation d’un site pour un praticien de bien-être.",
            tech: "Site réalisé en HTML/CSS.",
            image: "/assets/portfolio/espace-bien-etre.jpg",
            link: "path_to_bien_etre_site",
        },
    ];

    return (
        <Container className="mt-5 text-center" style={{ backgroundColor: '#f5f5f5' }}>
            <Banner />
            <h1>Portfolio</h1>
            <div style={{ position: 'relative', marginBottom: '20px', display: 'inline-block' }}>
                <p style={{ marginBottom: '20px' }}>
                    Voici quelques-unes de mes réalisations.
                    <div
                        style={{
                            width: "100%",
                            height: "4px",
                            backgroundColor: "#0d6efd",
                            margin: "0",
                            position: "absolute",
                            left: 0,
                            bottom: 0,
                        }}
                    ></div>
                </p>
            </div>
            <Row className="justify-content-center">
                {projects.map((project, index) => (
                    <Col xs={12} sm={6} md={4} className="mb-4" key={index}>
                        <Card style={{
                            border: "1px solid #EEE",
                            borderRadius: "8px",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.2s, box-shadow 0.2s",
                            overflow: "hidden"
                        }}>
                            <Card.Img variant="top" src={project.image} style={{ borderRadius: "15px 15px 0 0" }} />
                            <Card.Body style={{ padding: "20px" }}>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text>{project.description}</Card.Text>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        border: "2px solid #0d6efd",
                                        padding: "10px 20px",
                                        textDecoration: "none",
                                        color: "#0d6efd",
                                        borderRadius: "10px",
                                        display: "inline-block",
                                        marginTop: "10px",
                                        transition: "background-color 0.3s, color 0.3s",
                                    }}
                                    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0d6efd", e.currentTarget.style.color = "#fff")}
                                    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "transparent", e.currentTarget.style.color = "#0d6efd")}
                                >
                                    Voir
                                </a>
                            </Card.Body>
                            <Card.Footer style={{
                                backgroundColor: "#f9f9f9",
                                borderTop: "1px solid #EEE",
                                borderRadius: "0 0 15px 15px",
                                padding: "15px",
                                fontStyle: "italic",
                                color: "#555",
                            }}>
                                {project.tech}
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Realisation;
