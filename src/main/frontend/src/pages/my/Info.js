import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Container,ListGroup, Col, Row, Figure, Button , Modal  } from 'react-bootstrap';
import '../../css/my/my.css';
import sadLombok from '../../images/my/sad_pepper.png';

function Withdraw() { // 계정 삭제 modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="danger" size="sm" onClick={handleShow}>
                계정탈퇴
            </Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        계정 탈퇴
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="withdraw-body-base">
                    정말로 탈퇴하시겠습니까? <br/>
                    계정이 삭제되고 나면 마음이 바뀌어도 계정을 복구하지 못할 수 있습니다.
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        취소
                    </Button>
                    <Button variant="danger">탈퇴</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
function Info() {
    return (
        <section className="my">
            <div className="myBanner">
                <h2>내 정보</h2>
            </div>
            <Container id="info">
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup variant="flush">
                            <ListGroup.Item action variant="light" active href="/my/myInfo">내 정보</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myCoupon">쿠폰함</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myOrder">주문내역</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myPick">나의 찜</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/my/myQnaList">나의 문의내역</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="myInfo-base">
                            <Figure>
                                <Figure.Image roundedCircle
                                    width={50}
                                    height={50}
                                    alt="171x180"
                                    src="https://via.placeholder.com/171x180"
                                />
                            </Figure> <br/>
                            <div className="social-sign-in">
                                <Link className="social" id="naver-login" to="https://nid.naver.com/nidlogin.login">
                                    네이버 회원으로 로그인
                                </Link>
                                <Link className="social" id="kakao-login" to="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fcs.kakao.com%2F#login">
                                    카카오 회원으로 로그인
                                </Link>
                                <Link className="social" id="google-login" to="#">
                                     구글 회원으로 로그인
                                </Link>
                            </div>
                            <table className="myAccount">
                                <tr>
                                    <td>이름</td>
                                    <td>홍길동</td>
                                </tr>
                                <tr>
                                    <td>이메일</td>
                                    <td>
                                        <span>lombok@daum.net</span>
                                    </td>
                                    <td>
                                        <button className="btn modify">수정</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>휴대폰</td>
                                    <td>
                                        <span>010-1234-1001</span>
                                    </td>
                                    <td>
                                        <button className="btn modify">인증</button>
                                        <button className="btn modify">수정</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>주소</td>
                                    <td>
                                        <span>경기도 수원시</span>&nbsp;&nbsp;
                                    </td>
                                    <td>
                                        <button className="btn modify">수정</button>
                                    </td>
                                </tr>
                            </table>
                            <br/>
                            <img src={sadLombok} alt="sadLombok" className="withdraw-img"/>
                            <span>떡볶이를 더 이상 먹고 싶지 않으신가요?</span>&nbsp;&nbsp;
                            <Withdraw/>
                        </div>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    );

}
export default Info;