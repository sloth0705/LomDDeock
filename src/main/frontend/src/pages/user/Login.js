import {Link} from "react-router-dom";
import {Navbar} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../../css/user/login.css';
import Button from 'react-bootstrap/Button';


function Login() {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={5}>
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
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>이메일주소</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="primary" size="lg">
                                로그인
                            </Button>
                        </div>
                    </Form>

                </Col>
                <Col></Col>
            </Row>
        </Container>

    );

}

export  default  Login;