import React from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";

function adminOrderStatus() {
    return (
        <section id="admin">
            <Container id="adminOrderStatus">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminOrderStatus;