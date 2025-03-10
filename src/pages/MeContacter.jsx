import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../assets/css/contact.css"; // Importez le fichier CSS pour les styles personnalisés
import { IoIosPhonePortrait } from "react-icons/io";
import { MdPlace } from "react-icons/md";

const Contact = () => {
  return (
    <Container fluid className="contact-container">
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8} xl={6} className="content-box">
          <h1 className="text-center mb-4">Me contacter</h1>
          <p className="text-center mb-4">
            Pour me contacter en vue d&apos;un entretien ou d&apos;une future collaboration, merci de remplir le formulaire de contact.
          </p>
          <div className="divider1 mb-4"></div>

          <Row>
            <Col xs={12} lg={6} className="mb-4 mb-lg-0">
              <h2 className="mb-4">Formulaire de contact</h2>
              <div className="divider mb-4"></div>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Control type="text" placeholder="Votre nom" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Control type="email" placeholder="Votre adresse email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                  <Form.Control type="tel" placeholder="Votre numéro de téléphone" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="subject">
                  <Form.Control type="text" placeholder="Sujet" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Control as="textarea" rows={4} placeholder="Votre message" required />
                </Form.Group>
                <div className="btn-cont">
                  <Button variant="primary" type="submit" className="btn w-100">
                    Envoyer
                  </Button>
                </div>
              </Form>
            </Col>

            <Col xs={12} lg={6}>
              <h2 className="mb-4">Mes coordonnées</h2>
              <div className="divider mb-4"></div>
              <p><MdPlace /> 40 Rue Laure Diebold, 69009 Lyon, France</p>
              <p><IoIosPhonePortrait /> 06 20 30 40 50</p>
              <div className="map-responsive">
                <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9991925326743!2d2.294481315674259!3d48.85884407928715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzMyLjYiTiAywrAxNycyNC4yIkU!5e0!3m2!1sen!2sfr!4v1630496208021!5m2!1sen!2sfr"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
