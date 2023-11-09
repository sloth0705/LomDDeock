import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {Container, ListGroup, Col, Row, Button, Accordion, Table, Pagination} from 'react-bootstrap';
import '../../css/cs/cs.css';
function QnaList() {
    return (
        <section className="cs">
            <Container id="qna-list">
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
                    <Col sm={9} className="content">
                        <div className="location">
                            <span> 고객센터 > <strong>고객의 소리</strong> </span>
                        </div>
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
                        <div className="csQna-list">
                            <Table hover size="sm" className="text-center">
                                <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>유형</th>
                                    <th>제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>상태</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>14</td>
                                    <td>메뉴</td>
                                    <td><Link to="/cs/CsQnaView">마라떡볶이인데 안 매워요</Link></td>
                                    <td>manman97</td>
                                    <td>2024-10-10</td>
                                    <td className="answer">문의중</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>혜택</td>
                                    <td><Link to="/cs/CsQnaView">멤버쉽 같은 시스템은 없는건가요</Link></td>
                                    <td>mini9012</td>
                                    <td>2024-10-10</td>
                                    <td className="answer">문의중</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>메뉴</td>
                                    <td><Link to="/cs/CsQnaView">맛에 특유의 카레향이 나던데 레시피...</Link></td>
                                    <td>imposter</td>
                                    <td>2024-10-10</td>
                                    <td className="answer">문의중</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>회원정보</td>
                                    <td><Link to="/cs/CsQnaView">이거 방법이 없을까요?</Link></td>
                                    <td>id1234</td>
                                    <td>2024-10-10</td>
                                    <td className="answer complete">답변완료</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>쿠폰</td>
                                    <td><Link to="/cs/CsQnaView">쿠폰 사용하려는데 적용이 되지 않습...</Link></td>
                                    <td>mariadb</td>
                                    <td>2024-10-10</td>
                                    <td className="answer complete">답변완료</td>
                                </tr>
                                </tbody>
                            </Table>
                            <div className="buttons">
                                <Link to="/cs/CsQnaWrite" className="btn cs-write">작성</Link>
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
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default QnaList;