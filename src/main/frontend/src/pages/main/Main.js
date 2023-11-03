import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Tab, Tabs, Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../../css/main/main.css';
import blankImage from '../../images/blank.png';
function Main() {
    return(
        <section className="main">
            <div className="banner">
                <img src={blankImage} alt="배너"/>
            </div>
            {/* subMenu 시작 */}
            <div className="subMenu">
                <Container>
                    <Nav
                        activeKey="/home"
                        className="flex-content-center">
                        <Nav.Item>
                            <Nav.Link href="/menu/menuList" >
                                롬떡메뉴
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">
                                이벤트
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="고객안내" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    공지사항
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    이벤트
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    자주묻는 질문
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    고객의 소리
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                        <Nav.Item>
                            <NavDropdown title="고객안내" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">
                                    회사소개
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    오시는 길
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
            {/* subMenu 끝 */}
            {/* 인기상품 시작 */}
            <section className="hit">
                <div className="description">
                    <span>
                        인기상품
                    </span>
                </div>
                <article className="hit-item">
                    <Link to="/" className="reset-a">
                        <img src={blankImage} className="thumb"/>
                        <div className="item-info">
                            <h5 className="item-name">
                                떡볶이
                            </h5>
                            <p className="item-etc">
                                Lorem ipsum to sola sola sute snae
                            </p>
                            <p className="item-price">
                                30000원
                            </p>
                        </div>
                    </Link>
                </article>
                <article className="hit-item">
                    <Link to="/" className="reset-a">
                        <img src={blankImage} className="thumb"/>
                        <div className="item-info">
                            <h5 className="item-name">
                                떡볶이
                            </h5>
                            <p className="item-etc">
                                Lorem ipsum to sola sola sute snae
                            </p>
                            <p className="item-price">
                                30000원
                            </p>
                        </div>
                    </Link>
                </article>
                <article className="hit-item">
                    <Link to="/" className="reset-a">
                        <img src={blankImage} className="thumb"/>
                        <div className="item-info">
                            <h5 className="item-name">
                                떡볶이
                            </h5>
                            <p className="item-etc">
                                Lorem ipsum to sola sola sute snae
                            </p>
                            <p className="item-price">
                                30000원
                            </p>
                        </div>
                    </Link>
                </article>
                <article className="hit-item">
                    <Link to="/" className="reset-a">
                        <img src={blankImage} className="thumb"/>
                        <div className="item-info">
                            <h5 className="item-name">
                                떡볶이
                            </h5>
                            <p className="item-etc">
                                Lorem ipsum to sola sola sute snae
                            </p>
                            <p className="item-price">
                                30000원
                            </p>
                        </div>
                    </Link>
                </article>
            </section>
            {/* 인기상품 끝 */}
        </section>
    )
}

export default Main;