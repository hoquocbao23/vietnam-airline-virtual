import { useParams, useNavigate } from "react-router-dom";
import { hubDatas } from "../../data/hubs/hubs-data";
import { Container, Col, Row, Image } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';

const HubPage = () => {
    const { hubId } = useParams();
    const navigate = useNavigate(); // Lấy giá trị hubId từ URL
    const [hub, setHub] = useState(null);
    
    useEffect(() => {
        if (hubDatas[hubId]) {
          setHub(hubDatas[hubId]); // Cập nhật hub nếu hubId hợp lệ
        } else {
          setHub(null); // Đặt hub về null nếu hubId không hợp lệ
          navigate("/"); // Chuyển hướng đến trang 404
        }
      }, [hubId, hubDatas, navigate]); 

    if (!hub) {
        return null; // Xử lý khi hubId không khớp với dữ liệu
    }

    return (
        <>
            <Helmet>
                <title>{hub.title} | Vietnam Airlines Virtual</title>
                <meta name="description" content="Our Hubs" />
            </Helmet>
            <Container className="mt-4 mb-5" >
                <Row className="justify-content-center text-center mb-4 mt-4 page-title">
                    <Col style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{hub.title}</Col>
                </Row>

                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={8} ><Image style={{ maxWidth: "100%", height: "auto", borderRadius: "5px" }} src={hub.img} fluid /></Col>
                </Row>

                <Row className="justify-content-center mt-4">
                    <Col style={{ fontSize: "1.1rem", textAlign: "justify" }}>{hub.description}</Col>
                </Row>
            </Container>
        </>
    );
};

export default HubPage;