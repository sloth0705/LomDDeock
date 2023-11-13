import React from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";

function adminEventList() {
    return (
        <section id="admin">
            <Container id="adminEventList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div className="eventRegisterButton">
                            <Link to="/admin/event/adminEventRegister">이벤트 등록</Link>
                        </div>
                        <div className="eventList">
                            <ul>
                                <li>
                                    <h3><Link to="/cs/CsEventView">떡볶이 랜덤추첨 13차</Link></h3>
                                    <div>
                                        <button><Link to="/admin/event/adminEventModify">수정</Link></button>
                                        <button><Link to="#">삭제</Link></button>
                                    </div>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="/cs/CsEventView">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <div>
                                        <button><Link to="/admin/event/adminEventModify">수정</Link></button>
                                        <button><Link to="#">삭제</Link></button>
                                    </div>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="/cs/CsEventView">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <div>
                                        <button><Link to="/admin/event/adminEventModify">수정</Link></button>
                                        <button><Link to="#">삭제</Link></button>
                                    </div>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="/cs/CsEventView">
                                        <img src="https://via.placeholder.com/171x180" alt="event_img" className="event-progress"/>
                                    </Link>
                                </li>
                                <li>
                                    <h3><Link to="#">떡볶이 랜덤추첨 13차</Link></h3>
                                    <div>
                                        <button><Link to="/admin/event/adminEventModify">수정</Link></button>
                                        <button><Link to="#">삭제</Link></button>
                                    </div>
                                    <span className="date">기간: 2023.11.01 ~ 2023.11.07</span>
                                    <Link to="/cs/CsEventView">
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
                </Row>
            </Container>
        </section>
    )
}

export default adminEventList;