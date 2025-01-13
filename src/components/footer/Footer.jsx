import { Button, Col, Container, Row, Image, Nav } from "react-bootstrap";
import "../footer/footer.scss";
import "../header/header.scss";
import { btnDatas } from "../../data/button/button-data";
const Footer = () => {
  return (
    <>
   <div className="footer bg-light ">
  {/* Footer Header */}
  <Container className="footer-header">
    <Row className="align-items-center">
      <Col md={6} sm={12} lg={6} xs={12} className="text-md-start text-center">
        <h4>Ready for takeoff? Join us now!</h4>
      </Col>
      <Col md={6} sm={12} lg={6} xs={12} className="text-md-end text-center">
        {btnDatas.map((data, index) => (
                        <Button variant="warning" target="_blank" rel="noopener noreferrer" href={data.link} key={index} className="mx-1 custom-button ">
                          {data.name.toUpperCase()}
                        </Button>
                      ))}
      </Col>
    </Row>
    <hr />
  </Container>

  {/* Footer Body */}
  <Container fluid className="footer-body">
    <Row className="align-items-center">
      {/* Logo */}
      <Col md={4} lg={4} xs={12} className="footer-logo text-md-start text-center">
        <img
          src="/images/logo/footer-logo1.png"
          alt="Vietnam Airlines Virtual Logo"
          style={{ height: '100px' }}
        />
      </Col>

      {/* Vietnam Airlines Virtual Links */}
      <Col md={4} lg={3} xs={6} className="footer-links text-md-center text-center">
        <h6>Vietnam Airlines Virtual</h6>
        <ul className="list-unstyled">
          <li><Nav.Link href="/fleet">FLEET</Nav.Link></li>
          <li><Nav.Link href="/routes">ROUTES</Nav.Link></li>
          <li><Nav.Link href="/staffs">STAFF</Nav.Link></li>
          <li><Nav.Link href="/ranks">RANKS</Nav.Link></li>
        </ul>
      </Col>

      {/* Infinite Flight Community Links */}
      <Col md={4} lg={4} xs={6} className="footer-links text-md-end text-center">
        <h6>Infinite Flight Community</h6>
        <ul className="list-unstyled">
          <li><a href="https://community.infiniteflight.com/u/vietnamairlinesva/summary" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-white">IFC Account</a></li>
          <li><a href="#ifc-thread" className="text-decoration-none text-white">IFC Thread</a></li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Col md={12} className="text-center mt-3">
        <p className="text-muted">
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
