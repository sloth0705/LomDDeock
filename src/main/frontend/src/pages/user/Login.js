import { Link } from "react-router-dom";
import {Navbar, Container, Row, Col, Button, Form, Image} from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector  } from 'react-redux';
import '../../css/user/user.css';
import logo from "../../images/LomDDeock-letterlogo-korean.png";
import React from "react";
import KakaoLogin from "react-kakao-login";
import { setRefreshToken } from '../../storage/Cookie';
import { SET_TOKEN } from '../../store/Auth';
function Login() {
    const accessToken2 = useSelector((state) => state.authToken.accessToken);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const kakaoClientId = '9169f348c8c5bb0b3fc8f2e08db92d78'
    const kakaoOnSuccess = async (data)=>{
        console.log(data)
        const idToken = data.response.access_token  // 엑세스 토큰 백엔드로 전달
        const email = data.profile.kakao_account.email;
        // 해당 메일로 만들어진 계정이 있는지 확인
        const check = await performCheck(email);
        // 계정이 없을경우 새로 생성
        if (check) {
            const signData = signUp(email);
        }
        signIn(email);
    }
    const kakaoOnFailure = (error) => {
        console.log(error);
        alert('로그인에 실패하였습니다. 잠시 후 다시 시도해주세요.')
    };
    const performCheck = async (email) => {
        return axios.get(`http://localhost:8080/login/social/check/KAKAO?email=${email}`)
            .then((res) => {
                return res.data; // 또는 원하는 처리를 반환할 수 있습니다.
            })
            .catch((error) => {
                console.error("Error during check:", error);
                // 오류 처리 로직을 추가할 수 있습니다.
                throw error;
            });
    }
    const signUp = async (email) => {
        try {
            const response = await axios.post('/api/social/signup', {
                email: email
            });
            return response.data.accessToken;
            // 여기에서 response를 처리하거나 반환값을 가공할 수 있습니다.
            console.log(response.data);
            // 예시: 서버에서 성공적으로 처리되었을 때의 로직
            if (response.data.success) {
                // 성공적으로 가입된 경우의 추가 로직
                console.log('Sign-up successful!');
            } else {
                // 가입이 실패한 경우의 추가 로직
                console.log('Sign-up failed.');
            }
        } catch (error) {
            // 오류가 발생한 경우의 추가 로직
            console.error('Error during sign-up:', error);
        }
    }
    const signIn = async (email) => {
        try {
            const response = await axios.post('/api/social/signin', {
                email: email
            });
             localStorage.setItem("token", response.data.accessToken);
            setRefreshToken(response.data.refreshToken);
            dispatch(SET_TOKEN(response.data.accessToken));
debugger;
            return navigate("/");
            // 여기에서 response를 처리하거나 반환값을 가공할 수 있습니다.
            console.log(response.data);
        } catch (error) {
            // 오류가 발생한 경우의 추가 로직
            console.error('Error during sign-in:', error);
        }
    }
    return (
        <Container className="mt-4">
            <Row>
                <Col md={{ span: 5, offset: 3 }} id="loginCol">
                    <div className="d-flex justify-content-center">
                        <Image src={logo} alt="로고" className="logo"/>
                    </div>
                    <h2 class="title">로그인</h2>

                    <div>

                    <li id="kkLoginBtn">
                        <KakaoLogin
                              token={kakaoClientId}
                              onSuccess={kakaoOnSuccess}
                              onFail={kakaoOnFailure}
                              className="w100p kkLogin"
                          />
                    </li>
                    <li id="nvLoginBtn">
                        <a href="#">네이버 로그인</a>
                    </li>
                    <li id="ggLoginBtn">
                        <a href="#">구글 로그인</a>
                    </li>
                        <button onClick={() => console.log('AccessToken:', accessToken2)}>asdf</button>
                        <strong>또는</strong>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>아이디</Form.Label>
                            <Form.Control type="email" placeholder="이메일 주소 입력" />
                            <Form.Text className="text-muted">

                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" placeholder="비밀번호 입력" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="자동로그인" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="danger" type="submit">
                                로그인
                            </Button>
                        </div>
                        <span>
                            <Link to="/user/confirmEmail">비밀번호 재설정</Link>
                            <Link to="/user/signup">회원가입</Link>
                        </span>
                    </Form>

                </Col>
                <Col></Col>
            </Row>
        </Container>

    );

}

export  default  Login;