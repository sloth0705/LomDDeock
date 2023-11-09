import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {Container, ListGroup, Col, Row, Button, Accordion, Table, Pagination} from 'react-bootstrap';
import '../../css/cs/cs.css';
function QnaWrite() {
    return (
        <section className="cs">
            <Container id="qna-write">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" href="/cs/CsNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>고객의 소리</strong> </span>
                        </div>
                        <div className="write-content">
                            <p>롬복떡볶이 이용 중 불편하신 점을 문의주시면 최대한 빠른 시일내에 답변 드리겠습니다.</p>

                            <form action="#" method="post">
                                <h5>유형</h5>
                                <div className="find-csQna">
                                    <select>
                                        <option>전체</option>
                                        <option>이벤트</option>
                                        <option>주문/결제</option>
                                        <option>취소/환불</option>
                                        <option>혜택</option>
                                        <option>이용문의</option>
                                        <option>회원정보</option>
                                        <option>쿠폰</option>
                                        <option>기타</option>
                                    </select>
                                </div>

                                <h4>휴대폰 번호</h4>
                                <input type="text" name="email" placeholder="선택사항입니다."/>
                                <h4>이메일</h4>
                                <input type="text" name="hp" placeholder="선택사항입니다."/>

                                <h4>제목</h4>
                                <input type="text" name="title" placeholder="문의 제목을 입력해주세요."/>
                                <h4>내용</h4>
                                <textarea></textarea>
                                <h4>파일</h4>
                                <input type="file" name="file" className="qna-file"/> <br/>
                                <button type="submit" className="btn">등록</button>
                            </form>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default QnaWrite;