import '../../css/admin/admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, ListGroup, Row, Container} from "react-bootstrap";
import React from "react";
import MenuSalesStatusData from "./chart/MenuSalesStatusChartData";
import SideSalesStatusData from "./chart/SideSalesStatusChartData";
import ToppingSalesStatusData from "./chart/ToppingSalesStatusChartData";
import MenuSalesStatusChart from "./chart/MenuSalesStatusChart";
import SideSalesStatusChart from "./chart/SideSalesStatusChart";
import ToppingSalesStatusChart from "./chart/ToppingSalesStatusChart";

function adminIndex() {
    return (
        <section id="admin">
            <Container id="adminIndex">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <Col sm={2}>
                        <div className="todayDate">
                            <h2>2023-11-07</h2>
                        </div>
                        <ListGroup className="asideMenu">
                            <ListGroup.Item action variant="light" href="/admin/adminIndex">ADMIN HOME</ListGroup.Item>
                            <ListGroup.Item action variant="light">
                                메뉴관리
                                <ul>
                                    <li><a href="/admin/adminMenuList">▶ 메뉴목록</a></li>
                                    <li><a href="/admin/adminMenuRegister">▶ 메뉴등록</a></li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/admin/adminOrderStatus">주문현황</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/admin/adminBanner">배너관리</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/admin/adminEventList">이벤트관리</ListGroup.Item>
                            <ListGroup.Item action variant="light">
                                쿠폰관리
                                <ul>
                                    <li><a href="/admin/adminCouponList">▶ 쿠폰지급내역</a></li>
                                    <li><a href="/admin/adminCouponPayment">▶ 쿠폰지급</a></li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/admin/adminNoticeList">공지사항관리</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/admin/adminFaqList">자주묻는질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/admin/adminQna">고객의소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col className="statusArea">
                        {/* 운영현황 */}
                        <article className="OperationStatus">
                            <h5>✔ 운영현황</h5>
                            <div>
                                <strong>주문 건수</strong>
                                <span>300</span>
                            </div>
                            <div>
                                <strong>취소 건수</strong>
                                <span>30</span>
                            </div>
                            <div>
                                <strong>회원가입</strong>
                                <span>200</span>
                            </div>
                            <div>
                                <strong>방문자 수</strong>
                                <span>1,000</span>
                            </div>
                            <div>
                                <strong>고객의소리 문의 수</strong>
                                <span>115</span>
                            </div>
                        </article>
                        {/* 매출현황 */}
                        <div className="SalesStatus">
                            <div className="menuSalesStatus">
                                <h5>✔ 매출현황</h5>
                                <MenuSalesStatusChart data={MenuSalesStatusData}/>
                            </div>
                            <div className="sideSalesStatus">
                                <h6>- 사이드디시 매출현황</h6>
                                <SideSalesStatusChart data={SideSalesStatusData}/>
                            </div>
                            <div className="toppingSalesStatus">
                                <h6>- 11월 토핑 매출현황</h6>
                                <ToppingSalesStatusChart data={ToppingSalesStatusData}/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default adminIndex;