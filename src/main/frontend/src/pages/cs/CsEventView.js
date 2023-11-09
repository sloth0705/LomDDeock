import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion } from 'react-bootstrap';
import '../../css/cs/cs.css';
import Icon from '@mdi/react';
import { mdiChevronUp } from '@mdi/js';
import { mdiChevronDown } from '@mdi/js';
function EventView() {
    return (
        <section className="cs">
            <Container id="event-view">
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
                        <article className="event-now">
                            <div className="event-title">
                                <h3>[마라 떡볶이 출시 기념 레시피 공개]</h3>
                                <span className="date">기간 : 2023-10-20 ~ 2023-12-01</span>
                            </div>
                            <div className="event-content">
                                <p>
                                    <img src="https://dookki.co.kr/data/editor/2308/thumb-03f7942e6240bfb15e2061621659d093_1691024871_5852_1400x1980.jpg" alt="바이럴"/>
                                </p>
                            </div>
                        </article>
                        <div className="goto-event">
                            <table>
                                <tr>
                                    <td>
                                        이전글<Icon path={mdiChevronUp} size={1} />
                                    </td>
                                    <td><Link to="/cs/CsEventView">떡볶이를 주문하시면 에너지 드링크를 드려요!</Link></td>
                                    <td>기간: 2023.11.01 ~ 2023.11.07</td>
                                </tr>
                                <tr>
                                    <td>다음글<Icon path={mdiChevronDown} size={1} /></td>
                                    <td><Link to="/cs/CsEventView">11월 신한카드 할인 - 신용카드</Link></td>
                                    <td>기간: 2023.11.01 ~ 2023.11.07</td>
                                </tr>
                            </table>
                            <Link to="/cs/CsEventList" className="btn">목록</Link>

                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default EventView;