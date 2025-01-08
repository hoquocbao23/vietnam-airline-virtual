import { Button, Col, Container, Row, Image, Nav } from "react-bootstrap";
import "../footer/footer.scss";
import "../header/header.scss";
import { btnDatas } from "../../data/button/button-data";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <Container fluid className="wrap-footer">
          {/* Nội dung chính của footer */}
          <Row className="content-footer">
            {/* Cột 2: Thông tin */}
            <Col xs={12} md={4} className="footer-column footer-info">
              <p className="footer-title">Vietnam Airlines Virtual</p> {/* Dòng chữ tiêu đề */}
              <div className="footer-links ">
                <Nav.Link href="/fleet">FLEET</Nav.Link>
                <Nav.Link href="/routes">ROUTES</Nav.Link>
                <Nav.Link href="/staffs">STAFF</Nav.Link>
                <Nav.Link href="/ranks">RANKS</Nav.Link>
              </div>
            </Col>
          </Row>
          {/* Dòng thông báo cuối */}
          <Row className="content-bottom text-center">
            <Col>
              <p>
                Vietnam Airlines Virtual is an independent entity and is neither
                associated with nor endorsed or sponsored by Vietnam Airlines or
                Infinite Flight.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
