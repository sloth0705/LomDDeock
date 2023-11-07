import { Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../css/layout.css';
import '../css/footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/LomDDeock-logo-removebg.png';
function Footer() {
    return(
        <footer className="bg-body-tertiary">
            <Container>
                <Nav
                    activeKey="/introduce"
                    /*onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}*/
                    className="flex-content-center footer-nav">
                    <Nav.Item>
                        <Nav.Link href="/introduce">
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
                <Row className="flex-content-center">
                    <img src={logo} alt="로고" className="footerLogo"/>
                    <Col xs={7} className="pt50px">
                        <p>
                            ㈜롬복떡볶이 부산시 부산진구 서면로12-1  |  사업자등록번호 : 1234-1232-1234  |  대표이사 : 김롬볶<br/>
                            대표번호 : 070-1234-4321  |  고객센터 : 1234-4321  |  Email : lomddeock@lombok.com<br/>
                            Copyright © LOMBOK FOOD SYS All rights reserved.<br/>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;