import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {Container, ListGroup, Col, Row, Button, Accordion, Table, Pagination} from 'react-bootstrap';
import '../../css/cs/cs.css';
function QnaView() {
    return (
        <section className="cs">
            <Container id="qna-view">
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

                        <div className="view">
                            <Table>
                                <thead>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>유형</td>
                                    <td>회원</td>
                                </tr>
                                <tr>
                                    <td>제목</td>
                                    <td>이메일을 변경하고 싶습니다.</td>
                                </tr>
                                <tr>
                                    <td className="align-center">내용</td>
                                    <td>
                                        <span>이전에 사용했던 이메일을 삭제해서 다른 이메일로 변경하고 싶은데 어떻게 해야 되나요?</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="align-center">답변</td>
                                    <td>
                                        <span>
                                        언제나 맛있는 음식을 제공하는 롬복떡볶이입니다! <br/>
                                        이메일 변경은 우측 상단의 '마이페이지' -&gt; '내 정보'에서 바로 변경하실 수 있습니다. <br/>
                                        만일 이메일이 정상적으로 변경되지 않을시 고객센터에 다시 문의해주시길 바랍니다.
                                        </span>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                            <div className="btn-qna">
                                <button className="btn">삭제</button><button className="btn">목록</button>
                            </div>
                        </div>

                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default QnaView;