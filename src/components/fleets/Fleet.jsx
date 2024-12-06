import React from "react";
import { fleetCardData } from "../../data/card/fleet-card-data";
import FleetCard from "../card/fleet-card";
import "./fleet.scss";
import { Card, Col, Container, Row } from "react-bootstrap";
const Fleet = () => {
  return (
    <>
      <Container>
        <Row>
          {" "}
          {fleetCardData.map((data, index) => (
            <Col>
              <FleetCard
                key={index}
                name={data.name}
                description={data.description}
                image={data.image}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Fleet;
