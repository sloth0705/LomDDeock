import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "./AdminAsideMenu";
import React from "react";
import '../../css/admin/admin.css';

function adminMenuModify() {
    return (
        <section id="admin">
            <Container id="adminMenuModify">
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

export default adminMenuModify;