import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Figure, Button , Table } from 'react-bootstrap';
import '../../css/my/my.css';
function Info() {
    return (
        <section className="my">
            <div className="myBanner">
                <h2>내 정보</h2>
            </div>
            <Container id="info">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>

                        <Figure>
                            <Figure.Image roundedCircle
                                width={50}
                                height={50}
                                alt="171x180"
                                src="https://via.placeholder.com/171x180"
                            />
                        </Figure> <br/>
                        <Button variant="secondary" size="sm">
                            Naver 회원으로 로그인
                        </Button>

                        <table className="myAccount">
                            <tr>
                                <td>이름</td>
                                <td>홍길동</td>
                            </tr>
                            <tr>
                                <td>휴대폰</td>
                                <td>
                                    <Button variant="secondary" size="sm">
                                        인증
                                    </Button>
                                    &nbsp;
                                    <Button variant="secondary" size="sm">
                                        수정
                                    </Button>
                                </td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>
                                    <span>경기도 수원시</span>&nbsp;&nbsp;
                                    <Button variant="secondary" size="sm">
                                        수정
                                    </Button>
                                </td>
                            </tr>
                        </table>
                        <br/>
                        <span>떡볶이를 더 이상 먹고 싶지 않으신가요?</span>&nbsp;&nbsp;
                        <Button variant="danger" size="sm">
                            탈퇴
                        </Button>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );

}
export default Info;