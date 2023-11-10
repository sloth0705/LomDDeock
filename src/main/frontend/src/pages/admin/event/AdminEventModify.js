import React from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";

function adminEventModify() {
    return (
        <section id="admin">
            <Container id="adminEventModify">
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

export default adminEventModify;