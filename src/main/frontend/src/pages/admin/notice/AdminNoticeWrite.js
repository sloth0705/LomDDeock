import React from "react";
import '../../../css/admin/adminCs.css';
import {Col, Container, Row,Accordion } from "react-bootstrap";
import { useState } from "react";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
function Write() {
    
    // 에디터 설정
    const modules = {
        toolbar: {
            container: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                [{ 'font': []}],
                [{ 'align': [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, 'link'],
                [{ 'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color'] }, { 'background': [] }],
                ['image', 'video'],
                ['clean'],
            ],
        },
    };
    // 제목 및 내용 가져오기
    const [content, setContent] = useState("");
    console.log(content);
    const [title, setTitle] = useState("");
    console.log(title);

   /* const handleSubmit = async () => { // 전송
        const date = new Date();
        try {
            await createPost({
                title: title,
                content,
                date,
            }).then((res) => console.log(res));
        } catch (error) {
            console.log(error);
        }
    };*/
    return (
        <>
            <div>
                <h4>공지사항 제목 <em>(필수)</em></h4>
                <input type="text" name="title" placeholder="제목을 작성해주세요." onChange={setTitle}/>
                <h4>내용 입력 <em>(필수)</em></h4>
                <ReactQuill
                    style={{ width: "100%", height: "300px" }}
                    onChange={setContent}
                    modules={modules}
                />
                <div className="links">
                    <Link to="/admin/notice/adminNoticeList" className="btnWrite noticeList">취소</Link>
                    <button type="submit" className="btnWrite noticeReg">작성</button>
                </div>
            </div>
        </>
    );
}
function adminNoticeWrite() {
    return (
        <section id="admin">
            <Container id="adminNoticeWrite">
                <Row className="justify-content-center">
                    {/* aside menu */}
                    <AdminAsideMenu/>
                    <Col className="write-content">
                        <div>
                            <h3>공지사항 작성</h3>
                        </div>
                        <div>
                            <Write/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default adminNoticeWrite;