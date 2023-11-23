import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Container,ListGroup, Col, Row, Button , Accordion, Pagination } from 'react-bootstrap';
import { getNoticeList } from '../../js/cs/noticeList.js';
import '../../css/cs/cs.css';
function Notice() {
    // 문의내역 리스트
    const [noticeList, setNoticeList] = useState([]);
    // 문의내역 리스트 페이징
    const [noticePage, setNoticePage] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const noticeList = await getNoticeList(1);
            setNoticeList(noticeList.dtoList);
            setNoticePage(noticeList);
        };
        fetchData();
    },[])

    const handlePageClick = async (pageNumber) => {
      const noticeList = await getNoticeList(pageNumber);
      setNoticeList(noticeList.dtoList);
      setNoticePage(noticeList);
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = noticePage.start; i <= noticePage.end; i++) {
          pageNumbers.push(
            <Pagination.Item key={i} active={i === noticePage.pg} onClick={()=>{handlePageClick(i)}}>
              {i}
            </Pagination.Item>
          );
        }
        return pageNumbers;
    };
    // 날짜 yyy-mm-dd로 변환
    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        const date = formatter.formatToParts(new Date(dateString));
        return `${date[4].value}-${date[0].value}-${date[2].value}`;
    }
    return (
        <section className="cs">
            <Container id="notice">
                <div className="cs-title">
                    <h3>고객센터</h3>
                </div>
                <Row className="justify-content-center">
                    {/* aside */}
                    <Col sm={2}>
                        <ListGroup>
                            <ListGroup.Item action variant="light" active href="/cs/csNotice">공지사항</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsEventList">이벤트</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsFaq">자주묻는 질문</ListGroup.Item>
                            <ListGroup.Item action variant="light" href="/cs/CsQnaList">고객의 소리</ListGroup.Item>
                        </ListGroup>
                    </Col>
                    {/* content */}
                    <Col sm={9}>
                        <div className="location">
                            <span> 고객센터 > <strong>공지사항</strong> </span>
                        </div>
                        <Accordion>
                            {noticeList.map((notice, index) => (
                                <Accordion.Item eventKey={`${index}`}>
                                    <Accordion.Header>
                                        {notice.title}
                                        <span className="date">{formatDate(notice.rdate)}</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p>
                                            {notice.content}
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))}
                        </Accordion>

                        <Pagination style={{justifyContent:'center'}}>
                            {noticePage.prev && (
                                <>
                                  <Pagination.First />
                                  <Pagination.Prev />
                                </>
                            )}
                            {renderPageNumbers()}
                            {noticePage.prev && (
                                <>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </>
                            )}
                        </Pagination>
                    </Col>
                    {/* content end */}
                </Row>
            </Container>
        </section>
    )
}

export default Notice;