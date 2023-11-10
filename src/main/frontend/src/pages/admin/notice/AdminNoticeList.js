import React from "react";
import '../../../css/admin/adminCs.css';
import {Col, Container, Row,Accordion } from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";

function adminNoticeList() {
    return (
        <section id="admin">
            <Container id="adminNoticeList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div className="new-notice-write">
                            <Link to="/admin/adminNoticeWrite" className="btnWrite">새 공지사항 작성</Link>
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
                                    <p>
                                        <button className="btnDelete">삭제</button>
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
                                    <p>
                                        <button className="btnDelete">삭제</button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>[공지] 롬복떡볶이 사칭 제재 안내 <span className="date">2023-11-01</span></Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        <br/>
                                    </p>
                                    <p>
                                        <button className="btnDelete">삭제</button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default adminNoticeList;