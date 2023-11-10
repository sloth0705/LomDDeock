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
                        <label>자주묻는질문 등록</label>
                        {/* 유형선택 */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>유형선택<span>(필수)</span></InputGroup.Text>
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
                            <InputGroup.Text>질문<span>(필수)</span></InputGroup.Text>
                            <Form.Control placeholder="질문을 입력해주세요."/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>답변<span>(필수)</span></InputGroup.Text>
                            <Form.Control as="textarea" aria-label="With textarea" placeholder="답변을 입력해주세요."/>
                        </InputGroup>
                        <Link to="/admin/faq/adminFaqRegister" className="btnCancel">취소</Link>
                        <Link to="#" className="btnRegister">등록완료</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default adminFaqRegister;