import React from 'react';
import { Row, Col, Form, Container, Card } from 'react-bootstrap';
import '../../css/user/user.css';
import Button from 'react-bootstrap/Button';
import Image from "react-bootstrap/Image";
import logo from "../../images/LomDDeock_logo.jpg";
function Signup () {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 7, offset: 3 }} id="loginCol">
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2>이용약관</h2>
                    <div className="mb-3">
                        <Form.Check
                            reverse
                            label="전체 동의"
                            name="group1"
                            type='checkbox'
                        />
                    </div>
                    <Card>
                        <Card.Header>구매회원약관</Card.Header>
                        <Card.Body>
                            <Card.Text>구매회원약관 내용</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                            />
                        </div>
                        <Card.Header>전자금융거래</Card.Header>
                        <Card.Body>
                            <Card.Text>전자금융거래 내용</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                            />
                        </div>
                        <Card.Header>위치정보약관</Card.Header>
                        <Card.Body>
                            <Card.Text>위치정보약관 내용</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                            />
                        </div>
                        <Card.Header>개인정보처리</Card.Header>
                        <Card.Body>
                            <Card.Text>개인정보처리 내용</Card.Text>
                        </Card.Body>
                        <div className="mb-3">
                            <Form.Check
                                reverse
                                label="동의합니다."
                                name="group1"
                                type='checkbox'
                            />
                        </div>
                    </Card>
                    <div className="text-center">
                        <Button variant="danger"><a href="/register">동의하기</a></Button>{' '}
                    </div>
                </Col>
            </Row>
        </Container>
    );

}

export  default  Signup;