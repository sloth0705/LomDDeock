import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Table, Form, Image, Button } from 'react-bootstrap';
import '../../css/menu/menuOrder.css';
import blank from '../../images/blank.png';

const MenuOrder = (effect, deps) => {
    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const requestPay = () => {
        const { IMP } = window;
        IMP.init('imp56364406');

        const data = {
            pg: 'kakaopay', // PG사코드
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: '테스트 상품',
            amount: 10,
            buyer_email: 'test@naver.com',
            buyer_name: '코드쿡',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시',
            buyer_postcode: '123-456'
        }
        IMP.request_pay(data, callback);
    };

    const callback = (response) => {
        const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
        if (success) {
            alert("결제성공");
            // 서버 검증 요청 부분
        } else {
            // alert("결제에 실패하였습니다. 에러 내용: " + error_msg);
            alert(`결제 실패 : ${error_msg}`);
        }
    }

    const required = <span className="red">(필수)</span>;
    return (
        <section className="menuOrder">
            <section className="cartArea">
                <h2 className="cartText">
                    주문하기
                </h2>
                <Table className="cartInfoTable">
                    <thead>
                    <tr className="cartHeader">
                        <th className="check">
                            <Form.Check
                                type={'checkbox'}
                                id={'checkAll'}
                                label={''}
                            />
                        </th>
                        <th className="name">상품명</th>
                        <th className="price">상품금액</th>
                        <th className="count">수량</th>
                        <th className="delivery">배송비</th>
                        <th className="price">할인금액</th>
                        <th className="price">주문금액</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <Form.Check
                                type={'checkbox'}
                                label={''}
                            />
                        </td>
                        <td className="cartItemInfo">
                            <Image src={blank} className="cartThumb"/>
                            <p>
                                    <span>
                                        떡볶이
                                    </span>
                                <br/>
                                떡볶이설명설명
                            </p>
                        </td>
                        <td>
                            40,000
                        </td>
                        <td>
                            1
                        </td>
                        <td>
                            무료배송
                        </td>
                        <td>
                            -4,000
                        </td>
                        <td className="total">
                            36,000
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </section>
            <section className="orderInfoForm">
                <article className="deliveryInfoArea">
                    <Button variant="danger" className="orderDelete">
                        선택삭제
                    </Button>
                    <Table className="deliveryInfoTable">
                        <tbody>
                        <tr>
                            <td>
                                    <span className="bold">
                                        배송지 정보
                                    </span>
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="zip"
                                    placeholder="우편번호 찾기 클릭"
                                />
                            </td>
                            <td>
                                <Button variant="danger" className="">
                                    우편번호<br/> 찾기
                                </Button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="addr1"
                                    placeholder="기본주소 상세"
                                />
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="addr2"
                                    placeholder="상세주소 입력"
                                />
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                    <span className="bold">
                                        수령자 정보
                                    </span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                이름
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="receiver"
                                />
                            </td>
                            <td>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                휴대폰 번호
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    name="hp"
                                />
                            </td>
                            <td>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <div className="borderLine"/>
                    <Table className="discountInfoArea">
                        <tbody>
                        <tr>
                            <td>
                                    <span className="bold">
                                        할인 수단 선택
                                    </span>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                구매 총액
                            </td>
                            <td></td>
                            <td>
                                58,000원
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button variant="secondary">
                                    사용 가능 쿠폰 2장
                                </Button>
                            </td>
                            <td></td>
                            <td>
                                4,000원
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <div className="borderLine"/>
                    <article className="paymentInfoArea">
                        <span className="bold">
                            결제수단 선택
                        </span>
                        <Form.Select className="paymentSelection">
                            <option>결제수단 선택</option>
                            <option value="1">신용/체크카드</option>
                            <option value="2">간편계좌이체</option>
                            <option value="3">무통장입금</option>
                            <option value="4">카카오페이</option>
                        </Form.Select>
                        <Form.Check
                            type={'checkbox'}
                            label={'전체동의'}
                        />
                        <Form.Check
                            type={'checkbox'}
                            label={<span>취소/환불규정 동의 {required}</span>}
                        />
                        <Form.Check
                            type={'checkbox'}
                            label={<span>개인정보 수집 및 이용 동의 {required}</span>}
                        />
                        <Form.Check
                            type={'checkbox'}
                            label={<span>개인정보 제3자 제공 동의 {required}</span>}
                        />
                    </article>
                </article>
                <section className="menuOrderArea">
                    <h5 className="menuOrderText">
                        전체합계
                    </h5>
                    <article className="menuOrderForm">
                        <Table className="menuOrderTable">
                            <tbody>
                            <tr>
                                <td>
                                    상품금액
                                </td>
                                <td>
                                    40,000원
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    할인금액
                                </td>
                                <td>
                                    (-) 4,000원
                                </td>
                            </tr>
                            <tr className="gray-font">
                                <td>
                                    ㄴ 쿠폰
                                </td>
                                <td>
                                    (-) 4,000원
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    배송비
                                </td>
                                <td>
                                    0원
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    총 결제금액
                                </td>
                                <td>
                                        <span style={{color: 'red'}}>
                                            40,000
                                        </span>
                                    원
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <Button onClick={requestPay} variant="danger" className="menuOrderButton">
                            결제하기
                        </Button>
                    </article>
                </section>
            </section>
        </section>
    );
};

export default MenuOrder;