import React from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import logo from '../../images/LomDDeock-logo-removebg.png';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
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
                <p>
                    위 롬복떡볶이 BI(BRAND IDENTITY)의 형태나 비례는 어떠한 경우에도 정확하게 표현되어야 하며, <br/>
                    규정된 형태와 비례, 색상은 임의로 변경될 수 없습니다. 더하여, 브랜드의 시각적 이미지를 전달해주는 <br/>
                    중요 수단이므로 제시된 가이드라인을 준수하는 동시에, 브랜드 이미지에 손상이 발생하지 않도록 주의하여<br/>
                    사용하여야 합니다.
                </p>
            </div>
            <div>
                <h3>오시는 길</h3>
            </div>
            <div>
                <Map
                    center={{ lat: 33.5563, lng: 126.79581 }}
                    style={{ width: '800px', height: '600px' }}
                    level={3}
                >
                    <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}> </MapMarker> // 마커 좌표
                </Map>
            </div>
        </Container>
    );
}

export default Introduce;