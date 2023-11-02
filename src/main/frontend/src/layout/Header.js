import { Link } from 'react-router-dom';
import { Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container } from 'react-bootstrap';
import '../css/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link to="/" className="reset-a">
                            LomDDeock
                        </Link>
                    </Navbar.Brand>
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
                            <Nav.Link href="/login">
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