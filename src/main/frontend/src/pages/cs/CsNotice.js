import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion } from 'react-bootstrap';
import '../../css/cs/cs.css';
function Notice() {
    return (
        <section className="cs">
            <Container id="notice">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" active href="/cs/csNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>공지사항</strong> </span>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>[발표] 코딩문제 풀고 떡볶이 먹자! 이벤트 당첨자 발표 <span className="date">2023-11-01</span></Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        이번 이벤트 대회 당첨자 발표입니다. <br/>
                                        <Link to="#">당첨자 발표</Link>
                                        <br/>
                                        <br/>
                                        당첨되신 고객님께서는 마이페이지 > 쿠폰함에 자동적으로 지급되며, <br/>
                                        비회원이신 고객분들은 당첨자 발표 페이지에서 비회원 전용 쿠폰받기에서 <br/>
                                        이메일 혹은 휴대폰번호를 입력하시면 최대 3일내로 기프티콘이 전송되오니 확인해주시길 바랍니다.
                                        <br/>
                                        <br/>
                                        ※ 상품이 정상적으로 지급되지 않거나, 사용에 문제가 발생했을 시 고객센터로 문의해주세요.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>[공지] 롬복떡볶이 이용약관 변경 안내 <span className="date">2023-11-01</span></Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        롬복떡볶이의 서비스 이용약관이 아래와 같이 변경됩니다.
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>[공지] 쓰기 귀찮네 <span className="date">2023-11-01</span></Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="paging">
                            <span className="num prev"><Link to="#">&lt;</Link></span>

                            <span className="num on"><Link to="#">1</Link></span>
                            <span className="num"><Link to="#">2</Link></span>
                            <span className="num"><Link to="#">3</Link></span>
                            <span className="num"><Link to="#">4</Link></span>
                            <span className="num"><Link to="#">5</Link></span>

                            <span className="num next"><Link to="#">&gt;</Link></span>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default Notice;