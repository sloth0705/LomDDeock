import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Table,Pagination } from 'react-bootstrap';
import '../../css/my/my.css';
function Coupon(){
    return (
        <section className="my">
            <div className="myBanner">
                <h2>쿠폰함</h2>
            </div>
            <Container id="coupon">
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
                        <div className="pointBanner">
                            <p>
                                <span>보유 쿠폰</span>
                                <h3>5장</h3>
                            </p>
                            <p>30일 내 <span className="coup-expires">2장</span>의 쿠폰이 만료될 예정이에요.</p>
                        </div>
                        <div>
                            <div className="sort">
                                <Button variant="danger" size="lg" className="all">
                                    전체
                                </Button>
                                <Button variant="danger" size="lg" className="accumulate">
                                    사용가능
                                </Button>
                                <Button variant="danger" size="lg" className="use">
                                    사용완료
                                </Button>
                                <Button variant="danger" size="lg" className="expiration">
                                    만료
                                </Button>
                            </div>
                            <div className="point-list">
                                <Table hover size="sm" className="text-center">
                                    <thead>
                                    <tr>
                                        <th>쿠폰명</th>
                                        <th>적용기준</th>
                                        <th>제한조건</th>
                                        <th>상태</th>
                                        <th>유효기간</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>50% 할인 쿠폰</td>
                                        <td>-</td>
                                        <td>최대 5000원 할인 가능</td>
                                        <td className="coup available">사용가능</td>
                                        <td>~2024-04-01</td>
                                    </tr>
                                    <tr>
                                        <td>메*플 콜라보 만원 할인 쿠폰</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td className="coup use">사용완료</td>
                                        <td>~2024-02-12</td>
                                    </tr>
                                    <tr>
                                        <td>회원가입 축하 5천원 할인 쿠폰</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td className="coup expiration">만료</td>
                                        <td>~2023-11-01</td>
                                    </tr>
                                    </tbody>
                                </Table>

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
                            </div>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default Coupon;