import React from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FileUpload from "../fileUpload/FileUpload";
import {Link} from "react-router-dom";

function adminEventModify() {
    return (
        <section id="admin">
            <Container id="adminEventManagement">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <div>
                                <h3>이벤트 수정</h3>
                            </div>
                            <label>이벤트 제목</label>
                            <InputGroup className="mb-3">
                                <Form.Control placeholder="제목을 입력해주세요."/>
                            </InputGroup>
                            <label>이미지 업로드</label>
                            <FileUpload/>
                            <label>설명추가</label>
                            <InputGroup className="mb-3">
                                <Form.Control as="textarea" aria-label="With textarea" placeholder="답변을 입력해주세요."/>
                            </InputGroup>
                            <div>
                                <Link to="/admin/event/adminEventList" className="btnCancel">취소</Link>
                                <Link to="#" className="btnRegister">수정완료</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminEventModify;