import { createLazyFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import HeroSection from '../components/HeroSection/index';
import Footer from '../components/Footer';

export const Route = createLazyFileRoute('/search')({
  component: CariMobil,
})

function CariMobil() {
  const navigate = useNavigate()
  const { user, token } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!token) {
      navigate({ to: '/login' })
    }
  }, [navigate, token])

  return (
    <>
    <HeroSection />
    <Row className="mt-5">
      <Col className="offset-md-3">
        <Container className="w-50 card position-absolute top-50 start-50 translate-middle">
          <Form className="row gx-3 my-3" id="filter-form">
            <Row>
              <small><strong>Pencarianmu</strong></small>
              <Col md={5}>
                <Form.Group controlId="tanggal-sewa">
                  <Form.Label><small>Tanggal</small></Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group controlId="kapasitas">
                  <Form.Label><small>Penumpang</small></Form.Label>
                  <Form.Select aria-label="Penumpang">
                    <option>Pilih...</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={2} className="mt-4">
                <Button id="cari-mobil" variant="success" className="text-nowrap rounded-1 mt-md-2">
                  Cari Mobil
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Col>
      <Col md={3}></Col>
    </Row>
    <Footer />
    </>
  )
}
