import { Button, Col, Container, Row, Image, Nav } from "react-bootstrap";
import "../footer/footer.scss";
import "../header/header.scss";
import { btnDatas } from "../../data/button/button-data";
const Footer = () => {
  return (
    <>
    <div className="bg-light py-4">
      <Container>

        <Row className="justify-content-between align-items-center">
          <Col md={8} className="mb-3 mb-md-0">
            <h4>Ready for takeoff? Join us now!</h4>
          </Col>
          <Col md={4} className="text-md-end">
            {btnDatas.map((data, index) => (
              <Button target="_blank" rel="noopener noreferrer" href={data.link} key={index} className="mx-1 custom-button">
                {data.name.toUpperCase()}
              </Button>
            ))}
          </Col>
        </Row>

        <hr />

        <Row>
          <Col md={4}>
            <img
              src="logo-url.png" // Thay bằng URL logo của bạn
              alt="Vietnam Airlines Virtual Logo"
              style={{ height: '40px' }}
            />
          </Col>
          <Col md={4}>
            <h6>Vietnam Airlines Virtual</h6>
            <ul className="list-unstyled text-muted">
              <li><Nav.Link href="/fleet">FLEET</Nav.Link></li>
              <li><Nav.Link href="/routes">ROUTES</Nav.Link></li>
              <li><Nav.Link href="/staffs">STAFF</Nav.Link></li>
              <li><Nav.Link href="/ranks">RANKS</Nav.Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h6>Infinite Flight Community</h6>
            <ul className="list-unstyled">
              <li><a href="#ifc-account" className="text-decoration-none text-muted">IFC Account</a></li>
              <li><a href="#ifc-thread" className="text-decoration-none text-muted">IFC Thread</a></li>
            </ul>
          </Col>
          <Col md={12} className="text-center mt-3">
            <p className="mt-3 text-muted">
              Vietnam Airlines Virtual is an independent entity and is neither
              associated with nor endorsed or sponsored by Vietnam Airlines or
              Infinite Flight.
            </p>
          </Col>
        </Row>

      </Container>
      </div>
    </>
    
    
    
  );
};
export default Footer;
