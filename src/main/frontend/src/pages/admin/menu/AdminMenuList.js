import {Button, Col, Container, InputGroup, Row, Table} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import React, {useState, useEffect} from "react";
import '../../../css/admin/admin.css';
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";

function AdminMenuList() {
    const [menuData, setMenuData] = useState([]);
    useEffect(() => {
        // 데이터를 불러오는 비동기 함수 호출
        menuList();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 호출되게 함
    const menuList = async () => {
        try {
            const response = await axios.get('/api/menu/AdminMenuList');
            setMenuData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <section id="admin">
            <Container id="adminMenuList adminList">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col id="adminList">
                        {/* 유형선택 */}
                        <Form.Select aria-label="유형선택">
                            <option value="all">전체</option>
                            <option value="normal">일반</option>
                            <option value="side">사이드디시</option>
                            <option value="drinkOrOthers">음료/기타</option>
                        </Form.Select>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="메뉴명 입력"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2">검색</Button>
                        </InputGroup>
                        {/* 검색창 */}
                        {menuData.map(item =>(
                            <div className="adminListTable">
                                <Table hover size="sm" className="text-center">
                                    <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>메뉴명</th>
                                        <th>등록일</th>
                                        <th>비고</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>14</td>
                                        <td><Link to="/menu/menuView">○○○떡볶이</Link></td>
                                        <td>2023-11-01</td>
                                        <td>
                                            <Link to="#">삭제</Link>
                                            <span>　|　</span>
                                            <Link to="/admin/menu/adminMenuModify">수정</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td><Link to="/menu/menuView">☆☆☆떡볶이</Link></td>
                                        <td>2023-11-01</td>
                                        <td>
                                            <Link to="#">삭제</Link>
                                            <span>　|　</span>
                                            <Link to="/admin/menu/adminMenuModify">수정</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td><Link to="/menu/menuView">△△△세트</Link></td>
                                        <td>2023-11-01</td>
                                        <td>
                                            <Link to="#">삭제</Link>
                                            <span>　|　</span>
                                            <Link to="/admin/menu/adminMenuModify">수정</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td><Link to="/menu/menuView">○○○떡볶이</Link></td>
                                        <td>2023-11-01</td>
                                        <td>
                                            <Link to="#">삭제</Link>
                                            <span>　|　</span>
                                            <Link to="/admin/menu/adminMenuModify">수정</Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td><Link to="/menu/menuView">△△△떡볶이</Link></td>
                                        <td>2023-11-01</td>
                                        <td>
                                            <Link to="#">삭제</Link>
                                            <span>　|　</span>
                                            <Link to="/admin/menu/adminMenuModify">수정</Link>
                                        </td>
                                    </tr>
                                    </tbody>
                                </Table>
                                <div className="paging">
                                    <span className="num prev"><Link to="#">&lt;</Link></span>
                                    <span className="num on"><Link to="#">1</Link></span>
                                    <span className="num"><Link to="#">2</Link></span>
                                    <span className="num"><Link to="#">3</Link></span>
                                    <span className="num"><Link to="#">4</Link></span>
                                    <span className="num"><Link to="#">5</Link></span>
                                    <span className="num next"><Link to="#">&gt;</Link></span>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminMenuList;