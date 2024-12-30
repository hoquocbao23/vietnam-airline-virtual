import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import StaffCard from "./staff-card";
import { staffData } from "../../data/card/staff-card-data";
import { Helmet } from 'react-helmet-async';

const Staff = () => {
    return (
        <>
            <Helmet>
                <title>Staff | Vietnam Airlines Virtual</title>
                <meta name="description" content="Our Routes" />
            </Helmet>
            <Container className="mt-5 mb-5">
                <Row className="justify-content-center mb-4 page-title">
                    <Col xs={12} md={8} className="text-center">
                        <h1>Our Staff</h1>
                    </Col>
                </Row>

                <Row className="g-4 justify-content-center">
                    {staffData.map((data, index) => (
                        <Col className="d-flex justify-content-center" xs={12} sm={4} md={4} lg={4} xl={4} key={index}>
                            <StaffCard
                                key={index}
                                image={data.image}
                                name={data.name}
                                position={data.position}
                                account={data.account}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Staff
