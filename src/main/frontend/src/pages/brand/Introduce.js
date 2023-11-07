import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import logo from '../../images/LomDDeock_logo.jpg';
function Introduce (){
    return(
        <Container>
            <div>
                <h3>브랜드 소개</h3>
            </div>
            <div>
                <p>롬복떡복이 LomDDeock</p>
                <p>
                    세상에 떡볶이는 많습니다.<br/>
                    그러나 맛있는 떡볶이는 흔치 않습니다.
                </p>
                <p>
                    맛있는, 다양한 떡볶이 맛으로 수많은 고객들을 매니아로 만든 맛<br/>
                    가족, 친구, 연인, 동료 등 좋은 사람들과 함께 즐길 수 있는
                </p>
                <p>
                    <strong>롬복떡볶이</strong>입니다.
                </p>
            </div>
            <div>
                <h3>BI(BRAND IDENTITY)</h3>
                <Image src={logo} alt="로고" className="logo"/>
            </div>
            <div>
                <h3>오시는 길</h3>
            </div>
        </Container>
    );
}

export default Introduce;