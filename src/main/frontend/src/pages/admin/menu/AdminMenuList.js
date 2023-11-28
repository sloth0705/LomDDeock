import {Button, Col, Container, InputGroup, Row, Table} from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import React, {useState, useEffect} from "react";
import '../../../css/admin/admin.css';
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import axios from "axios";
import MenuPagination from "./proc/MenuPagination";
import { useLocation } from "react-router-dom";

// 년,월,일만 출력
function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
    return formattedDate;
}
function ListMenu () {
    // 데이터 호출
    const [listData, setListData] = useState([]); // 현재 게시글 목록
    const [pageData, setPageData ] =useState({}); // 페이지네이션
    const [page, setPage] = useState(1); // 페이지 번호

    // 카테고리 추출
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const cate = searchParams.get('cate');

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(() => {
        axios.get(`/api/menu/AdminMenuList?cate=${cate || ''}&page=${page}`)
            .then(res => {
                const data = res.data;
                if(data.cate === "normal"){
                    setListData(data.menues);
                }else {
                    setListData(data.sides);
                }
                setPageData(data);
                setPage(data.pg);
                console.log(typeof(listData.length));
                console.log("pageData : "+pageData);
                console.log("page : "+page);
            })
            .catch(err => {
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    }, [cate, page]);

    return(
        <>
            <div className="adminListTable" id="adminMenuListTable">
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
                    {listData.reverse().map((item, index) =>(
                    <tr key={index}>
                        <td>{listData.length - index}</td>
                        <td><Link to={`/menu/menuView/${item.id}`}>{item.menuName}</Link></td>
                        <td>{formatDate(item.rdate)}</td>
                        <td>
                            <Link to="#">삭제</Link>
                            <span>　|　</span>
                            <Link to={`/admin/menu/adminMenuModify${item.id}`}>수정</Link>
                        </td>
                    </tr>
                    ))}
                    </tbody>
                </Table>
                <MenuPagination
                    page={page}
                    setPage={setPage}
                    pageData={pageData}
                />
            </div>

        </>

    );

}
function AdminMenuList() {

    return (
        <>
            <section id="admin">
                <Container id="adminMenuList adminList">
                    <Row className="justify-content-center">
                        {/* aside menu */}
                        <AdminAsideMenu/>
                        <Col id="adminList">
                            {/* 유형선택 */}
                            <Form.Select aria-label="유형선택">
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
                                {/* 검색창 */}
                                <Button variant="outline-secondary" id="button-addon2">검색</Button>
                            </InputGroup>
                            <ListMenu/>

                        </Col>
                    </Row>
                </Container>
            </section>
        </>

    )
}

export default AdminMenuList;