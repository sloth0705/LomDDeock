import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Figure, Button , Table,Pagination,Card } from 'react-bootstrap';
import '../../css/my/my.css';
function Pick(){
    return (
        <section className="my">
            <div className="myBanner">
                <h2>나의 찜</h2>
            </div>
            <Container id="pick">
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
                        <div className="pick-list">
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/100x180" className="my-order-img"/>
                                <Card.Body>
                                    <Card.Title>[인기] 절차지향 세트</Card.Title>
                                    <Card.Text>
                                        <div className="detail-manu">
                                            · 토핑 : 넓적당면, 차돌박이, 모짜치즈, 비엔나소시지, 튀김어묵 <br/>
                                            · 사이드메뉴 : 꿔바로우, 김말이, 날치알주먹밥 <br/>
                                            · 음료 : 쿨피스 (1L), 스프라이트(355ml) <br/>
                                        </div>
                                        <span className="price">28000원</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/100x180" className="my-order-img"/>
                                <Card.Body>
                                    <Card.Title>알리오 올리오 떡볶이</Card.Title>
                                    <Card.Text>
                                        <div className="detail-manu">
                                            · 토핑 : 넓적당면, 차돌박이, 모짜치즈, 비엔나소시지, 튀김어묵 <br/>
                                            · 사이드메뉴 : 꿔바로우, 김말이, 날치알주먹밥 <br/>
                                            · 음료 : 쿨피스 (1L), 스프라이트(355ml) <br/>
                                        </div>
                                        <span className="price">30000원</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="https://via.placeholder.com/100x180" className="my-order-img"/>
                                <Card.Body>
                                    <Card.Title>로제 떡볶이</Card.Title>
                                    <Card.Text>
                                        <div className="detail-manu">
                                            · 토핑 : 넓적당면, 차돌박이, 모짜치즈, 비엔나소시지, 튀김어묵 <br/>
                                            · 사이드메뉴 : 꿔바로우, 김말이, 날치알주먹밥 <br/>
                                            · 음료 : 쿨피스 (1L), 스프라이트(355ml) <br/>
                                        </div>
                                        <span className="price">15000원</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </div>
                        {/* 페이징 */}
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item active>{1}</Pagination.Item>
                            <Pagination.Item>{2}</Pagination.Item>
                            <Pagination.Item>{3}</Pagination.Item>
                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default Pick;