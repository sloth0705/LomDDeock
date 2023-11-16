import React, {useState} from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import {Link} from "react-router-dom";
import axios from 'axios';


function AdminFaqRegister() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);

        const { cate: cateData } = inputs;
        console.log(cateData);


        /*axios.post('/api/admin/faq/adminFaqRegister', inputs)
            .then(res => {
                alert("등록되었습니다.");
            })
            .catch(err => {
                console.log("전송에 문제가 발생했습니다.");
            });*/
    }
    return (
        <section id="admin">
            <Container id="adminFaqRegister">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <div>
                            <div>
                                <h3>자주묻는질문 등록</h3>
                            </div>
                            <form onSubmit={handleSubmit}>
                                {/* 유형선택 */}
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>유형</InputGroup.Text>
                                    <Form.Select aria-label="유형선택" name="cate" onChange={handleChange}>
                                        <option value="0">전체</option>
                                        <option value="10">이벤트</option>
                                        <option value="11">주문/결제</option>
                                        <option value="12">취소/환불</option>
                                        <option value="13">혜택</option>
                                        <option value="14">이용문의</option>
                                        <option value="15">회원정보</option>
                                        <option value="16">쿠폰</option>
                                    </Form.Select>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>질문</InputGroup.Text>
                                    <Form.Control placeholder="질문을 입력해주세요." name="title" onChange={handleChange} />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>답변</InputGroup.Text>
                                    <Form.Control as="textarea" aria-label="With textarea" name="content" onChange={handleChange} placeholder="답변을 입력해주세요."/>
                                </InputGroup>
                                <div>
                                    <Link to="/admin/faq/adminFaqList" className="btnCancel">취소</Link>
                                    <button type="submit" className="btnRegister">등록</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminFaqRegister;