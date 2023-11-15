import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container } from 'react-bootstrap';
import '../css/layout.css';
import '../css/mainHeader.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/LomDDeock-letterlogo-korean.png';
import character from '../images/LomDDeock-character.png';
import Image from "react-bootstrap/Image";
import pepperImg from "../images/pepper.png";
function MainHeader() {
    const [memberEmail] = useState(localStorage.getItem("email"));
    return (
        <header id="mainHeader">
            <div className=" d-flex justify-content-center">
                <Link to="/">
                    <div>
                        <img src={logo} alt="로고" className="logo"/>
                        <img src={character} alt="로고"  className="character"/>
                    </div>
                </Link>
                <Navbar>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {memberEmail === null ?
                            <Nav.Link href="/user/login">로그인</Nav.Link> :
                            <>
                            <Nav.Link href="https://kauth.kakao.com/oauth/logout?client_id=591789449e2da1495d41e7af46686eb7&logout_redirect_uri=http://localhost:3000/user/logout">로그아웃</Nav.Link>
                            <NavDropdown title="마이페이지" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/my/myInfo">
                                    나의 정보
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myCoupon">
                                    쿠폰함
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myOrder">
                                    주문내역
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myPick">
                                    나의 찜
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/my/myQnaList">
                                    나의 문의내역
                                </NavDropdown.Item>
                            </NavDropdown>
                            </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    )
}

export default MainHeader;