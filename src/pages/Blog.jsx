import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Banner from "./Banner";  

// Liste des articles
const articles = [
  {
    id: 1,
    title: "Coder son site en HTML/CSS",
    date: "22 août 2022",
    image: "/assets/blog/coder.jpg",
    description: "Quelques exemples pour comprendre la base du développement web avec HTML et CSS."
  },
  {
    id: 2,
    title: "Vendre ses produits sur le web",
    date: "20 août 2022",
    image: "/assets/blog/croissance.jpg",
    description: "Des astuces pour réussir la vente de vos produits en ligne."
  },
  {
    id: 3,
    title: "Se positionner sur Google",
    date: "1 août 2022",
    image: "/assets/blog/google.jpg",
    description: "Apprenez les techniques essentielles pour améliorer votre référencement sur Google."
  },
  {
    id: 4,
    title: "Coder en responsive design",
    date: "31 juillet 2022",
    image: "/assets/blog/screens.jpg",
    description: "Des conseils pour rendre vos sites web compatibles avec tous les appareils."
  },
  {
    id: 5,
    title: "Techniques de référencement",
    date: "30 juillet 2022",
    image: "/assets/blog/seo.jpg",
    description: "Les meilleures pratiques pour optimiser le référencement de vos sites web."
  },
  {
    id: 6,
    title: "Apprendre à coder",
    date: "12 juillet 2022",
    image: "/assets/blog/technos.png",
    description: "Un guide pour démarrer votre apprentissage du développement web."
  },
];

const Blog = () => {

 return (
    <Container className="py-4" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Composant Banner */}
      <Banner />

      {/* Titre principal */}
      <h1 className="text-center mt-5">Blog</h1>

      {/* Description du blog */}
      <p className="text-center mt-4 text-muted">
        Retrouvez ici quelques articles sur le développement web.
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

      {/* Liste des articles */}
      <Row>
        {articles.map((article) => (
          <Col xs={12} md={6} lg={4} className="mt-4" key={article.id}>
            <Card className="shadow-sm">
              {/* Image de l'article */}
              <Card.Img variant="top" src={article.image} alt={article.title} />
              <Card.Body>
                {/* Titre de l'article */}
                <Card.Title>{article.title}</Card.Title>

                {/* Description de l'article */}
                <Card.Text>{article.description}</Card.Text>

                {/* Bouton pour lire la suite */}
                <Button variant="primary">Lire la suite</Button>
              </Card.Body>

              {/* Footer avec la date de publication */}
              <Card.Footer>
                <small className="text-muted">Publié le {article.date}</small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Blog;
