import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Table, Pagination, Form } from 'react-bootstrap';
import '../../css/my/my.css';
function QnaList(){
    return (
        <section className="my">
            <div className="myBanner">
                <h2>나의 문의내역</h2>
            </div>
            <Container id="QnaList">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="find-myQna">
                            <select>
                                <option>전체</option>
                                <option>회원</option>
                                <option>주문</option>
                                <option>메뉴</option>
                            </select>
                        </div>
                        <div className="myQna-list">
                            <Table hover size="sm" className="text-center">
                                <thead>
                                <tr>
                                    <th>유형</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>상태</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>메뉴</td>
                                    <td><Link to="/my/MyQnaView">사장님 개발자같은데 코딩 언어 추천...</Link></td>
                                    <td>2024-10-10</td>
                                    <td className="answer-complete">답변완료</td>
                                </tr>
                                <tr>
                                    <td>회원</td>
                                    <td><Link to="/my/MyQnaView">이메일 변경하고 싶어요</Link></td>
                                    <td>2024-10-10</td>
                                    <td>문의중</td>
                                </tr>
                                <tr>
                                    <td>주문</td>
                                    <td><Link to="/my/MyQnaView">포장주문시 할인 문의</Link></td>
                                    <td>2024-10-10</td>
                                    <td className="answer-complete">답변완료</td>
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
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default QnaList;