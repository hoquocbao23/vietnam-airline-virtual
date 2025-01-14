import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import StaffCard from "./staff-card";
import { staffData } from "../../data/card/staff-card-data";
import { Helmet } from 'react-helmet-async';
import "./staff.scss";


const Staff = () => {
    const executives = staffData.filter(data => data.role === 'Executives');
    return (
        <>
            <Helmet>
                <title>Staff | Vietnam Airlines Virtual</title>
                <meta name="description" content="Our Staff" />
            </Helmet>

            <Container className="mt-5 mb-5">
                <Row className="justify-content-center mb-4 page-title">
                    <Col xs={12} md={8} className="text-center">
                        <h1 className="page-title">Our Staff Team</h1>
                    </Col>
                </Row>


                <Row className="g-4 justify-content-center">
                    {/* Render Executives */}
                    <Col xs={12} md={8} className="text-center mb-3 ">
                        <h3 className="staff-role">Executive Team</h3>
                    </Col>

                    {executives.length > 0 && (

                        <Row className="justify-content-center staff-card-container">
                            <Col xs={12} sm={4} md={4} lg={4} xl={4} className="d-flex justify-content-center ">
                                <StaffCard
                                    image={executives[0].image}
                                    name={executives[0].name}
                                    position={executives[0].position}
                                    introdution={executives[0].introdution}
                                    account={executives[0].account}
                                />
                            </Col>
                        </Row>

                    )}

                    {/* Row 2: 3 người còn lại */}
                    {executives.length > 1 && (

                        <Row className="g-4 justify-content-center staff-card-container">
                            {executives.slice(1, 4).map((data, index) => (
                                <Col
                                    key={index}
                                    xs={12} sm={4} md={4} lg={4} xl={4}
                                    className="d-flex justify-content-center "
                                >
                                    <StaffCard
                                        image={data.image}
                                        name={data.name}
                                        position={data.position}
                                        introdution={data.introdution}
                                        account={data.account}
                                    />
                                </Col>
                            ))}
                        </Row>

                    )}

                    {/* Render Staff */}

                    <Col xs={12} md={8} className="text-center mt-5 mb-0 ">
                        <h3 className="staff-role">Staff Team</h3>
                    </Col>
                    <Row className="g-4 justify-content-center staff-card-container mt-0">
                        {staffData
                            .filter(data => data.role === 'Staff')
                            .map((data, index) => (
                                <Col
                                    className="d-flex justify-content-center "
                                    xs={12} sm={4} md={4} lg={4} xl={4}
                                    key={index}
                                >
                                    <StaffCard
                                        key={index}
                                        image={data.image}
                                        name={data.name}
                                        position={data.position}
                                        introdution={data.introdution}
                                        account={data.account}
                                    />
                                </Col>
                            ))}
                    </Row>

                </Row>
            </Container>
        </>
    )
}




export default Staff
