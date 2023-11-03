import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../css/user/user.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Login() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={5} id="loginCol">
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
                            <Button variant="primary" type="submit">
                                로그인
                            </Button>
                        </div>
                        <span>
                            <a href="#">비밀번호 재설정</a>
                            <a href="/signup">회원가입</a>
                        </span>
                    </Form>

                </Col>
                <Col></Col>
            </Row>
        </Container>

    );

}

export  default  Login;