import React from "react";
import { fleetCardData } from "../../data/card/fleet-card-data";
import FleetCard from "./fleet-card";
import { Card, Col, Container, Row } from "react-bootstrap";
const Fleet = () => {
  return (
    <>
      
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={8} className="text-center">
              <h1>Our Fleets</h1>
            </Col>
          </Row>
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
    </>
  );
};
export default Fleet;
