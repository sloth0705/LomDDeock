import React from "react";
import '../../../css/admin/admin.css';
import {Accordion, Button, Col, Container, InputGroup, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import Form from "react-bootstrap/Form";
import {Link} from "react-router-dom";

function adminQna() {
    return (
        <section id="admin">
            <Container id="adminQna">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        {/* 유형선택 */}
                        <Form.Select aria-label="유형선택">
                            <option value="all">전체</option>
                            <option value="event">이벤트</option>
                            <option value="order">주문/결제</option>
                            <option value="cancel">취소/환불</option>
                            <option value="benefit">혜택</option>
                            <option value="inquiry">이용문의</option>
                            <option value="userInformation">회원정보</option>
                            <option value="coupon">쿠폰</option>
                            <option value="etc">기타</option>
                        </Form.Select>
                        {/* 검색창 */}
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="검색어 입력"
                            />
                            <Button variant="outline-secondary" id="button-addon2">검색</Button>
                        </InputGroup>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?</Accordion.Header>
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
                                    <label>
                                        작성자 : aaa<br/>
                                        작성일 : 2023.11.01
                                    </label>
                                    <button>답변하기</button>
                                    <button>삭제</button>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                    <label>
                                        답변완료일 : 2023.11.02
                                    </label>
                                    <button>삭제</button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?</Accordion.Header>
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
                                    <label>
                                        작성자 : aaa<br/>
                                        작성일 : 2023.11.01
                                    </label>
                                    <button>답변하기</button>
                                    <button>삭제</button>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                    <label>
                                        답변완료일 : 2023.11.02
                                    </label>
                                    <button>삭제</button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?</Accordion.Header>
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
                                    <label>
                                        작성자 : aaa<br/>
                                        작성일 : 2023.11.01
                                    </label>
                                    <button>답변하기</button>
                                    <button>삭제</button>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                    <label>
                                        답변완료일 : 2023.11.02
                                    </label>
                                    <button>삭제</button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?</Accordion.Header>
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
                                    <label>
                                        작성자 : aaa<br/>
                                        작성일 : 2023.11.01
                                    </label>
                                    <button>답변하기</button>
                                    <button>삭제</button>
                                    <p>
                                        언제나 맛있는 떡볶이를 만드는 롬복 떡볶이입니다.
                                        <br/>
                                        ※ 전화문의 : 1234-1234 (상담시간 : 오전 9시~익일 3시)
                                    </p>
                                    <label>
                                        답변완료일 : 2023.11.02
                                    </label>
                                    <button>삭제</button>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>[이용문의] 매장에서 몇 명까지 식사가 가능한가요?</Accordion.Header>
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
                                    <label>
                                        작성자 : aaa<br/>
                                        작성일 : 2023.11.01
                                    </label>
                                    <p>
                                        <textarea></textarea>
                                    </p>
                                    <button>취소</button>
                                    <button>완료</button>
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

export default adminQna;