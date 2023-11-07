import {Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col} from 'react-bootstrap';
import '../css/layout.css';
import '../css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/LomDDeock-logo-removebg.png';

function Footer() {
    return (
        <footer className="bg-body-tertiary">
            <Container>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    className="flex-content-center footer-nav">
                    <Nav.Item>
                        <Nav.Link href="/home">
                            회사소개
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">
                            공지사항
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">
                            이용약관
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled">
                            개인정보처리방침
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                <Row>
                    <Col xs={3}>
                        <img src={logo} alt="로고" className="footerLogo"/>
                    </Col>
                    <Col xs={9} className="pt50px">
                        <p>
                            ㈜롬복떡볶이 부산시 부산진구 서면로12-1<br/>
                            대표이사 : 김롬볶<br/>
                            사업자등록번호 : 1234-1232-1234<br/>
                            Copyright GC COMPANY Corp. All rights reserved.<br/>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;