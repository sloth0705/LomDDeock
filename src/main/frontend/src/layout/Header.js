import { Button, Stack } from 'react-bootstrap';
import '../css/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">LomDDeock</Navbar.Brand>
                    <div className="w15p"/>
                    <InputGroup className="w35p">
                        <Form.Control
                            placeholder=""
                            aria-label="Search"
                            aria-describedby="basic-addon1"
                        />
                        <InputGroup.Text id="basic-addon1">검색</InputGroup.Text>
                    </InputGroup>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="margin-left-auto">
                            <Nav.Link href="#home">
                                로그인
                            </Nav.Link>
                            <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    나의 정보
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    포인트
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    쿠폰함
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    주문내역
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    나의 찜
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    나의 문의내역
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">
                                상품권
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;