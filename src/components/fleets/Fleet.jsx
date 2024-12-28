import React from "react";
import { fleetCardData } from "../../data/card/fleet-card-data";
import FleetCard from "../card/fleet-card";
import "./fleet.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
const Fleet = () => {
  return (
    <>
      <div className="fleet">
        <div className="">
          <h1 className="fleet-title">Our Fleet</h1>
        </div>
        <Container>
          <Row className="g-5"> 
            {fleetCardData.map((data, index) => (
              <Col xs={12} sm={4} md={4} lg={4}>
                <FleetCard
                  key={index}
                  image={data.image}
                  name={data.name}
                  description={data.description}
                  details={data.details}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Fleet;
