import React, { useState } from "react";
import '../../../css/admin/admin.css';
import {Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import AdminAsideMenu from "../AdminAsideMenu";
import axios from "axios";

function AdminMenuRegister() {

    const [type, setType] = useState("normal");
    //axios
    const registerMenu = (e)=>{
        e.preventDefault();
        if(type === "normal"){

        }
        // 폼 요소에 대한 참조 가져오기
        const form = document.getElementById("registerForm");
        const formData = new FormData(form);

        // axios를 사용한 폼 전송
        axios.post('/api/menu/register', formData)

            .then((res)=>{
                console.log("전송성공: "+res);
            })
            .catch((err)=>{
                console.error("전송실패: "+err);
            });
    };

    return (
        <section id="admin">
            <Container id="adminMenuManagement">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col>
                        <Form id="registerForm">
                            {/* 유형선택 */}
                            <Form.Select aria-label="유형선택" name="type" onChange={(e) => setType(e.target.value)}>
                                <option value="normal">일반</option>
                                <option value="side">사이드디시</option>
                                <option value="drinkOrOthers">음료/기타</option>
                            </Form.Select>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="inputGroup-sizing-default">
                                    메뉴명<span>(필수)</span>
                                </InputGroup.Text>
                                <Form.Control
                                    name="menuName"
                                    aria-label="Default"
                                    aria-describedby="inputGroup-sizing-default"
                                    placeholder="메뉴의 이름을 입력해주세요."
                                />
                            </InputGroup>
                            <Form.Group controlId="formFile" className="mb-3">
                                메뉴 이미지 첨부 (필수)
                                <Form.Control type="file" name="thumb"/>
                            </Form.Group>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>메뉴 설명<span>(선택)</span></InputGroup.Text>
                                <Form.Control name="descript" as="textarea" aria-label="With textarea" placeholder="해당 메뉴에 대한 설명을 입력해주세요."/>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>사이즈 옵션</InputGroup.Text>
                                <Form.Control name="sizeCount"/>
                                <InputGroup.Text>개</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>사이즈</InputGroup.Text>
                                <Form.Control />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>가격</InputGroup.Text>
                                <Form.Control name="price"/>
                                <InputGroup.Text>원</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>맵기 옵션</InputGroup.Text>
                                <Form.Control name="spicyCount"/>
                                <InputGroup.Text>개</InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <Form.Control name="spicy"/>
                                <InputGroup.Text>맛</InputGroup.Text>
                                <Form.Control  name="spicy"/>
                                <InputGroup.Text>맛</InputGroup.Text>
                                <Form.Control  name="spicy"/>
                                <InputGroup.Text>맛</InputGroup.Text>
                            </InputGroup>
                            <article className="addOption">
                                <p>선택옵션 추가 (선택)</p>
                                <button>+</button>
                                <button>-</button>
                                <div className="classification">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text>토핑 이름</InputGroup.Text>
                                        <Form.Control name="topping"/>
                                    </InputGroup>
                                    <div className="subcate">
                                        <Form.Group controlId="formFile" className="mb-3 formFile">
                                            <Form.Control type="file" name="file"/>
                                        </Form.Group>
                                        <InputGroup className="mb-3 inputSubcate">
                                            <InputGroup.Text>금액</InputGroup.Text>
                                            <Form.Control name="toppingPrice"/>
                                            <InputGroup.Text>원</InputGroup.Text>
                                        </InputGroup>
                                    </div>
                                </div>
                            </article>
                        </Form>
                        <button onClick={registerMenu}>등록</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AdminMenuRegister;