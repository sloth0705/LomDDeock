import React, {useEffect, useMemo, useRef } from "react";
import '../../../css/admin/adminCs.css';
import {Col, Container, Row,Accordion } from "react-bootstrap";
import { useState } from "react";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link, useNavigate} from "react-router-dom";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import axios from "axios";

function Write() {
    const navigate = useNavigate();
    // 전송할 데이터
    const [content, setContent] = useState("");
    console.log(content);
    const [title, setTitle] = useState("");
    const [registant, setRegistant] = useState('');
    const quillRef = useRef(null);

    // 최종 전송
    const formData = new FormData();

    // 제목 내용 수집
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    // 로그인 된 이메일 가져오기
    useEffect(()=>{
        const email = localStorage.getItem('email');
        if (email) {
            setRegistant(email.slice(0, 3) + '***');
        }
    },[]);

    // 이미지 처리
    const handleImage = () => {
        try {
            // Quill 에디터에서 현재 내용을 가져옴
            const editor = quillRef.current.getEditor();

            // 이미지 파일을 선택하면 이미지를 FormData에 추가
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.click();
            input.onchange = async function () {
                const file = input.files[0];

                formData.append('title', title);
                formData.append('content', content);
                formData.append('registant', registant);
                formData.append('image', file, file.name);


                // 이미지를 base64로 변환
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64 = reader.result;

                    // 이미지를 base64로 변환된 문자열로 삽입
                    const range = editor.getSelection(true);
                    editor.insertEmbed(range.index, 'image', base64);
                };
                reader.readAsDataURL(file);
            };
        } catch (error) {
            console.error('Error saving content:', error);
        }
    }
    
    // 전송
    const handleSubmit = (event) => {
        event.preventDefault();

        formData.append('title', title);
        formData.append('content', content);
        formData.append('registant', registant);

        console.log("formData:");
        for (let pair of formData.entries()) {
            console.log(pair[0] + ': ' + pair[1]);
        }
        /*axios.post('/api/admin/notice/adminNoticeWrite', formData,{
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            .then(res => {
                alert("등록되었습니다.");
                navigate("/admin/faq/adminFaqList");
            })
            .catch(err => {
                console.log("전송에 문제가 발생했습니다.");
            });*/
    }



    // 에디터 설정
    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    [{'header': [1, 2, 3, 4, 5, 6, false]}],
                    [{'font': []}],
                    [{'align': []}],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{'list': 'ordered'}, {'list': 'bullet'}, 'link'],
                    [{'color': ['#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff', '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff', '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff', '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2', '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466', 'custom-color']}, {'background': []}],
                    ['image', 'video'],
                    ['clean'],
                ],
                handlers: {
                    // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
                    image: handleImage,
                },
            }, // toolbar
        }; // return
    }, []);


    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet',
        'link', 'image',
    ];

    return (
        <>
            <div>
                <form encType="multipart/form-data">
                    <h4>공지사항 제목 <em>(필수)</em></h4>
                    <input type="text" name="title" placeholder="제목을 작성해주세요." onChange={handleTitleChange}/>
                    <h4>내용 입력 <em>(필수)</em></h4>
                    <ReactQuill
                        ref={quillRef}
                        style={{ width: "100%", height: "300px" }}
                        onChange={setContent}
                        modules={modules}
                        formats={formats}
                    />
                    <div className="links">
                        <Link to="/admin/notice/adminNoticeList" className="btnWrite noticeList">취소</Link>
                        <button type="button" className="btnWrite noticeReg" onClick={handleSubmit}>작성</button>
                    </div>
                </form>
            </div>
        </>
    );
}
function AdminNoticeWrite() {
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

export default AdminNoticeWrite;