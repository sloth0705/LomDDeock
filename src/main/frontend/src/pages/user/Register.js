import React, { useState } from 'react';
import { Form, Button, Col, Container, Row, InputGroup, Image } from 'react-bootstrap';
import PopupDom from '../../popup/PopupDom';
import PopupPostCode from '../../popup/PopupPostCode';
import '../../css/user/user.css';
import logo from "../../images/LomDDeock-letterlogo-korean.png";
function Register(){
    // 팝업창 상태 관리
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    // 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }

    // 팝업창 닫기
    const closePostCode = (data) => {
        const zip = document.getElementsByName('zip');
        const addr1 = document.getElementsByName('addr1');
        zip[0].value = data.zip;
        addr1[0].value = data.addr;
        setIsPopupOpen(false)
    }
    return(
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 7, offset: 3 }}>
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2>회원가입</h2>
                    <Form>
                        <Form.Label>이메일 아이디</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="이메일 주소를 입력하세요"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text>@</InputGroup.Text>
                            <Form.Select id="basic-addon2">
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                                {/* 다른 이메일 옵션들을 추가할 수 있습니다 */}
                            </Form.Select>
                            <Button variant="outline-secondary" id="button-addon2">
                                인증번호 전송
                            </Button>
                        </InputGroup>
                        <Form.Label>인증번호</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="인증번호를 입력하세요."
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                인증번호 확인
                            </Button>
                        </InputGroup>

                        <Form.Label>비밀번호</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
                        </InputGroup>

                        <Form.Label>비밀번호 확인</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="password" placeholder="비밀번호 확인" />
                        </InputGroup>

                        <Form.Label>전화번호</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control type="tel" placeholder="전화번호를 입력하세요" />
                        </InputGroup>

                        <Form.Label>주소</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="우편번호"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                name="zip"
                            />
                            <Button variant="outline-secondary" id="button-addon2" onClick={openPostCode}>
                                우편번호 찾기
                            </Button>
                            <div id='popupDom'>
                                {isPopupOpen && (
                                    <PopupDom>
                                        <PopupPostCode onClose={closePostCode} />
                                    </PopupDom>
                                )}
                            </div>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder="주소" name='addr1'/>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder="상세주소 입력" name='addr2'/>
                        </InputGroup>
                        <div className="text-center">
                            <Button variant="danger" type="submit">
                                회원가입
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default  Register;