import { Link, useNavigate } from "@tanstack/react-router";
import { Row, Col } from 'react-bootstrap';

const Footer = () => {

  return (
    <>
        <div style={{ height: '90px' }}></div>
      <Row className="px-5">
        <div id="cars-container"></div>
      </Row>
      <Row className="my-5 footer">
        <Col md={4} className="gy-2">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </Col>
        <Col md={2} className="gy-2">
          <p as={Link} href={`#`}>Our Services</p>
          <p as={Link} href={`#`}>Why Us</p>
          <p as={Link} href={`#`}>Testimonial</p>
          <p as={Link} href={`#`}>FAQ</p>
        </Col>
        <Col md={3} className="gy-2 mb-3">
          <p>Connect with us</p>
          <img src="icon_fb.png" alt="Facebook" className="me-2 mb-3" />
          <img src="icon_instagram.png" alt="Instagram" className="me-2 mb-3" />
          <img src="icon_twitter.png" alt="Twitter" className="me-2 mb-3" />
          <img src="icon_mail.png" alt="Mail" className="me-2 mb-3" />
          <img src="icon_twitch.png" alt="Twitch" className="me-2 mb-3" />
        </Col>
        <Col md={3} className="gy-2">
          <p>Copyright Binar 2022</p>
          <a className="navbar-brand" href={`/`}>
            <div className="box px-5 py-3 w-25" style={{ backgroundColor: '#0D28A6' }}></div>
          </a>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
