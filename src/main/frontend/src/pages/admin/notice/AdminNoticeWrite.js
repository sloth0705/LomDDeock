import React from "react";
import '../../../css/admin/adminCs.css';
import {Col, Container, Row,Accordion } from "react-bootstrap";
import AdminAsideMenu from "../AdminAsideMenu";
import {Link} from "react-router-dom";
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/i18n/ko-kr';

function EditorBox() {
    return (
        <Editor
            initialValue="Rifmr"
            previewStyle="vertical"
            width="800px"
            height="600px"
            hideModeSwitch="true"
            initialEditType="wysiwyg"
            useCommandShortcut={false}
            plugins={[colorSyntax]}
            language="ko-KR"
        />
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
                            <form>
                                <h4>공지사항 제목 <em>(필수)</em></h4>
                                <input type="text" name="title" placeholder="제목을 작성해주세요."/>
                                <h4>내용 입력 <em>(필수)</em></h4>
                                <EditorBox/>
                                <div className="links">
                                    <Link to="/admin/notice/adminNoticeList" className="btnWrite">취소</Link>
                                    <button type="submit" className="btnWrite">작성</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default adminNoticeWrite;