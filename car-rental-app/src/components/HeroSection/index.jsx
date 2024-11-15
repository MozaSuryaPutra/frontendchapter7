import { Link, useNavigate } from "@tanstack/react-router";
import { Row, Col } from 'react-bootstrap';

const HeroSection = () => {

  return (
    <Row>
      <Col md={6} className="align-self-center">
        <h2 className="lh-base">Sewa & Rental Mobil Terbaik di kawasan Bogor</h2>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga
          terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
        </p>
      </Col>
      <Col md={6} className="mt-4 offset-md-0">
        <img src='/img_car.png' alt="car image" className="img-fluid mb-0" />
      </Col>
    </Row>
  );
};

export default HeroSection;
