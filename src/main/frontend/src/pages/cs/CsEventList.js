import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion } from 'react-bootstrap';
import '../../css/cs/cs.css';
function EventList() {
    return (
        <section className="cs">
            <Container id="event-list">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" href="/cs/CsNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>이벤트</strong> </span>
                        </div>
                        <div className="event-div">
                            <ul>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="#">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="#">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="#">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="#">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>

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

export default EventList;