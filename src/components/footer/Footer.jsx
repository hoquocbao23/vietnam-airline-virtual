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
            {/* Cột 1: Ảnh */}
            <Col xs={12} md={4} className="footer-column">
              <Image
                src="/images/logo/footer_banner.png"
                style={{ width: "100%", height: "auto" }}
                alt="Footer Banner"
              />
            </Col>
            {/* Cột 2: Thông tin */}
            <Col xs={12} md={4} className="footer-column footer-info">
              <p className="footer-title">Vietnam Airline Virtual</p> {/* Dòng chữ tiêu đề */}
              <div className="footer-links ">
                <Nav.Link href="/fleet">FLEET</Nav.Link>
                <Nav.Link href="/routes">ROUTES</Nav.Link>
                <Nav.Link href="/staffs">STAFF</Nav.Link>
                <Nav.Link href="/ranks">RANKS</Nav.Link>
              </div>
            </Col>
            {/* Cột 3: Nút và dòng chữ */}
            <Col xs={12} md={4} className="footer-column text-center">
              <p className="ready-to-fly">Ready to fly? Join us today</p>
              <div className="footer-buttons">
                {btnDatas.map((data, index) => (
                  <Button
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.link}
                    key={index}
                    className="mx-2 mt-2 custom-button"
                  >
                    {data.name.toUpperCase()}
                  </Button>
                ))}
              </div>
            </Col>
          </Row>
          {/* Dòng thông báo cuối */}
          <Row className="content-bottom text-center">
            <Col>
              <p>
                Vietnam Airline Virtual is an independent entity and is neither
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
