import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Button , Table, Pagination, Form } from 'react-bootstrap';
import '../../css/my/my.css';
function QnaList(){
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
                            <ListGroup.Item action variant="light" href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>

                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );
}

export default QnaList;