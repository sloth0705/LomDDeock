import React, {useState, useEffect} from "react";
import '../../../css/admin/admin.css';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";
import axios from "axios";


function FasList(){

    const [listData, setListData] = useState([]);

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(() => {
        axios.get('/api/admin/faq/adminFaqList')
            .then(res => {
                setListData(res.data);
            })
            .catch(err => {
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    }, []);

    return (
        <Accordion>
            {listData.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{item.title}<span className="date">{item.rdate}</span></Accordion.Header>
                    <Accordion.Body>
                        <p>
                            {item.content}
                        </p>
                        <p>
                            <button className="btnModify">수정</button>
                            <button className="btnDelete">삭제</button>
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            ))}
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
    )
}
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
                        <FasList/>
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