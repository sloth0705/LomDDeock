import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion } from 'react-bootstrap';
import '../../css/cs/cs.css';
function Faq() {
    return (
        <section className="cs">
            <Container id="faq">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" href="/cs/csNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>자주묻는질문</strong> </span>
                        </div>
                        <div className="faq-cate">
                            <Link to="#" className="on">이벤트</Link>
                            <Link to="#">주문/결제</Link>
                            <Link to="#">취소/환불</Link>
                            <Link to="#">혜택</Link>
                            <Link to="#">이용문의</Link>
                            <Link to="#">회원정보</Link>
                            <Link to="#">쿠폰</Link>
                        </div>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>[이벤트] 비회원은 상품을 어떻게 수령하나요?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        비회원이신 고객님께서는 당첨자 발표 페이지에서 비회원 전용 상품 수령 링크로 이동하시면<br/>
                                        이메일 혹은 휴대폰번호 입력을 통하여 3일 내로 쿠폰을 수령하실 수 있습니다.<br/>
                                        당첨 상품 유형이 제품일시 이에 맞게 주소 입력도 가능하니 해당 페이지를 확인해주시길 바랍니다.
                                        <br/>
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>[이벤트] 비회원은 상품을 어떻게 수령하나요?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        비회원이신 고객님께서는 당첨자 발표 페이지에서 비회원 전용 상품 수령 링크로 이동하시면<br/>
                                        이메일 혹은 휴대폰번호 입력을 통하여 3일 내로 쿠폰을 수령하실 수 있습니다.<br/>
                                        당첨 상품 유형이 제품일시 이에 맞게 주소 입력도 가능하니 해당 페이지를 확인해주시길 바랍니다.
                                        <br/>
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>[이벤트] 비회원은 상품을 어떻게 수령하나요?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        비회원이신 고객님께서는 당첨자 발표 페이지에서 비회원 전용 상품 수령 링크로 이동하시면<br/>
                                        이메일 혹은 휴대폰번호 입력을 통하여 3일 내로 쿠폰을 수령하실 수 있습니다.<br/>
                                        당첨 상품 유형이 제품일시 이에 맞게 주소 입력도 가능하니 해당 페이지를 확인해주시길 바랍니다.
                                        <br/>
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>[이벤트] 비회원은 상품을 어떻게 수령하나요?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        비회원이신 고객님께서는 당첨자 발표 페이지에서 비회원 전용 상품 수령 링크로 이동하시면<br/>
                                        이메일 혹은 휴대폰번호 입력을 통하여 3일 내로 쿠폰을 수령하실 수 있습니다.<br/>
                                        당첨 상품 유형이 제품일시 이에 맞게 주소 입력도 가능하니 해당 페이지를 확인해주시길 바랍니다.
                                        <br/>
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>[이벤트] 비회원은 상품을 어떻게 수령하나요?</Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                        비회원이신 고객님께서는 당첨자 발표 페이지에서 비회원 전용 상품 수령 링크로 이동하시면<br/>
                                        이메일 혹은 휴대폰번호 입력을 통하여 3일 내로 쿠폰을 수령하실 수 있습니다.<br/>
                                        당첨 상품 유형이 제품일시 이에 맞게 주소 입력도 가능하니 해당 페이지를 확인해주시길 바랍니다.
                                        <br/>
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
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

export default Faq;