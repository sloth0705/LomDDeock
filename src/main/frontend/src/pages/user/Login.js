import { Link } from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/user/user.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from "react-bootstrap/Image";
import logo from "../../images/LomDDeock-letterlogo-korean.png";
import React from "react";


function Login() {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 5, offset: 3 }} id="loginCol">
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2 class="title">로그인</h2>

                    <div>

                    <li id="kkLoginBtn">
                        <a href="#">카카오톡 로그인</a>
                    </li>
                    <li id="nvLoginBtn">
                        <a href="#">네이버 로그인</a>
                    </li>
                    <li id="ggLoginBtn">
                        <a href="#">구글 로그인</a>
                    </li>
                        <strong>또는</strong>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="email" placeholder="이메일 주소 입력" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="자동로그인" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="danger" type="submit">
                                로그인
                            </Button>
                        </div>
                        <span>
                            <Link to="/user/confirmEmail">비밀번호 재설정</Link>
                            <Link to="/user/signup">회원가입</Link>
                        </span>
                    </Form>

                </Col>
                <Col></Col>
            </Row>
        </Container>

    );

}

export  default  Login;