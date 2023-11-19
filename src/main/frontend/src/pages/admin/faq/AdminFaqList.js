import React, {useState, useEffect} from "react";
import '../../../css/admin/admin.css';
import {Accordion, Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link, useLocation } from "react-router-dom";
import axios from "axios";


function FasList(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const cate = searchParams.get('cate');

    useEffect(() => {
        console.log("pathname: ", location.pathname);
        console.log("search: ", location.search);
        console.log("cate: ", cate);
    }, [ location, cate ])


    const [listData, setListData] = useState([]);

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(() => {
        axios.get(`/api/admin/faq/adminFaqList?cate=${cate || ''}`)
            .then(res => {
                setListData(res.data);
                console.log(listData);
            })
            .catch(err => {
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    }, [cate]);

    return (
        <Accordion>
            {listData.map((item, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>[{item.cateName}]{item.title}<span className="date">{item.rdate}</span></Accordion.Header>
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

function AdminFaqCate() {

    const location = useLocation();

    const isActive = (cate) => {
        const currentCate = new URLSearchParams(location.search).get('cate');
        return currentCate === cate;
    };

    return(
        <div className="AdminFaqCate">
            <Link to="/admin/faq/adminFaqList?cate=10" className={isActive('10') ? 'on' : ''}>이벤트</Link>
            <Link to="/admin/faq/adminFaqList?cate=11" className={isActive('11') ? 'on' : ''}>주문/결제</Link>
            <Link to="/admin/faq/adminFaqList?cate=12" className={isActive('12') ? 'on' : ''}>취소/환불</Link>
            <Link to="/admin/faq/adminFaqList?cate=13" className={isActive('13') ? 'on' : ''}>혜택</Link>
            <Link to="/admin/faq/adminFaqList?cate=14" className={isActive('14') ? 'on' : ''}>이용문의</Link>
            <Link to="/admin/faq/adminFaqList?cate=15" className={isActive('15') ? 'on' : ''}>회원정보</Link>
            <Link to="/admin/faq/adminFaqList?cate=16" className={isActive('16') ? 'on' : ''}>쿠폰</Link>
        </div>
    );

}
function AdminFaqList() {
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
                        <AdminFaqCate/>
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

export default AdminFaqList;