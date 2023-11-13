import React from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {Link} from "react-router-dom";

function adminFaqRegister() {
    return (
        <section id="admin">
            <Container id="adminFaqRegister">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <div>
                                <h3>자주묻는질문 등록</h3>
                            </div>
                            {/* 유형선택 */}
                            <InputGroup className="mb-3">
                                <InputGroup.Text>유형</InputGroup.Text>
                                <Form.Select aria-label="유형선택">
                                    <option value="all">전체</option>
                                    <option value="event">이벤트</option>
                                    <option value="order">주문/결제</option>
                                    <option value="cancel">취소/환불</option>
                                    <option value="benefit">혜택</option>
                                    <option value="inquiry">이용문의</option>
                                    <option value="userInformation">회원정보</option>
                                    <option value="coupon">쿠폰</option>
                                </Form.Select>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>질문</InputGroup.Text>
                                <Form.Control placeholder="질문을 입력해주세요."/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>답변</InputGroup.Text>
                                <Form.Control as="textarea" aria-label="With textarea" placeholder="답변을 입력해주세요."/>
                            </InputGroup>
                            <div>
                                <Link to="/admin/faq/adminFaqList" className="btnCancel">취소</Link>
                                <Link to="#" className="btnRegister">등록</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminFaqRegister;