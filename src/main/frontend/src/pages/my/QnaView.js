import { Routes, Route, BrowserRouter, Link, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Table, Pagination, Form } from 'react-bootstrap';
import { getQnaView } from '../../js/cs/qnaView.js';
import '../../css/my/my.css';
function QnaList(){
    const { cno } = useParams();
    const [qnaView, setQnaView] = useState({});
    const [replyForm, setReplyForm] = useState({});
    useEffect(()=>{
        const fetchData = async () => {
            const qnaInfo = await getQnaView(cno);
            setQnaView(qnaInfo);
            setReplyForm(qnaInfo.replyForm);
        };
        fetchData();
    },[])
    return (
        <section className="my">
            <div className="myBanner">
                <h2>나의 문의내역</h2>
            </div>
            <Container id="QnaView">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" active href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="view">
                            <Table>
                                <thead>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>유형</td>
                                    <td>{qnaView.cateName}</td>
                                </tr>
                                <tr>
                                    <td>제목</td>
                                    <td>{qnaView.title}</td>
                                </tr>
                                <tr>
                                    <td className="align-center">내용</td>
                                    <td>
                                        <span>{qnaView.content}</span>
                                    </td>
                                </tr>
                                {replyForm === null ? null : (
                                    <tr>
                                        <td className="align-center">답변</td>
                                        <td>
                                            <span>
                                                {replyForm.reply}
                                            </span>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </Table>
                            <div className="btn-qna">
                                <Button variant="secondary" size="lg" className="delete-myQna">
                                    삭제
                                </Button>
                                <Link to="/my/myQnaList">
                                    <Button size="lg" className="btn success">
                                        목록
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default QnaList;