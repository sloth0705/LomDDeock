import React from "react";
import '../../../css/admin/admin.css';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";

function adminFaqList() {
    return (
        <section id="admin">
            <Container id="adminFaqList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div className="faqRegisterButton">
                            <Link to="/admin/faq/adminFaqRegister" className="btnWrite">자주묻는질문 등록</Link>
                        </div>
                        <div className="AdminFaqCate">
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
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?<span className="date">2023-11-01</span></Accordion.Header>
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
                                    <p>
                                        <button className="btnModify">수정</button>
                                        <button className="btnDelete">삭제</button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?<span className="date">2023-11-01</span></Accordion.Header>
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
                                    <p>
                                        <button className="btnModify">수정</button>
                                        <button className="btnDelete">삭제</button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?<span className="date">2023-11-01</span></Accordion.Header>
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
                                    <p>
                                        <button className="btnModify">수정</button>
                                        <button className="btnDelete">삭제</button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?<span className="date">2023-11-01</span></Accordion.Header>
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
                                    <p>
                                        <button className="btnModify">수정</button>
                                        <button className="btnDelete">삭제</button>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?<span className="date">2023-11-01</span></Accordion.Header>
                                <Accordion.Body>
                                    <p>
                                        <textarea></textarea>
                                    </p>
                                    <p>
                                        <button className="btnModify">완료</button>
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
                </Row>
            </Container>
        </section>
    )
}

export default adminFaqList;