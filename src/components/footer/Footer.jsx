import { Button, Col, Container, Row } from "react-bootstrap";
import "../footer/footer.scss";
import { btnDatas } from "../../data/button/button-data";
const Footer = () => {
  return (
    <div className="footer">
      <Container fluid className="wrap-footer">
        <Row className="content-footer">
          <Col>Image</Col>
          <Col className="footer-right">
            <Col>Ready to fly? Join us today</Col>
            <Row>
              <Col>
                {btnDatas.map((data, index) => (
                  <Button key={index} variant="warning" className="mx-2 mt-2">
                    {data.name.toUpperCase()}
                  </Button>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="content-bottom">
          Vietnam Airline Virtual is an independent entity and is neither
          associated with nor endorsed or sponsored by Vietnam Airlines or
          Infinite Flight.{" "}
        </div>
      </Container>
    </div>
  );
};
export default Footer;
