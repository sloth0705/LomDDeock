import React, { useState } from 'react';
import { Link, useSearchParams } from "react-router-dom";
import { Table, Form, Image } from 'react-bootstrap';
import '../../css/menu/menuComplete.css';
import blank from '../../images/blank.png';

function MenuOrderComplete() {
    const [searchParams] = useSearchParams()

    // 서버로 승인 요청

    return (
        <section className="menuComplete">
            <h2 className="completeText">
                주문완료
            </h2>
            <p className="orderCompleted">
                고객님의 주문이 정상적으로 완료되었습니다.
            </p>
            <Table className="completeItemInfoTable">
                <thead>
                    <tr className="completeItemInfoHeader">
                        <th className="name">상품명</th>
                        <th className="price">상품금액</th>
                        <th className="count">수량</th>
                        <th className="price">할인금액</th>
                        <th className="price">주문금액</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                            -4,000
                        </td>
                        <td className="total">
                            36,000
                        </td>
                    </tr>
                </tbody>
            </Table>
            <article className="completeOrderForm">
                <Table className="completeOrderTable">
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
            </article>
            <article className="orderedInfoForm">
                <h5 className="orderedInfoText">
                    주문정보
                </h5>
                <Table className="orderedInfoTable">
                    <tbody>
                        <tr>
                            <td>
                                주문번호
                            </td>
                            <td>
                                1000121121
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                결제방법
                            </td>
                            <td>
                                신용카드
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                주문자/연락처
                            </td>
                            <td>
                                홍길동 / 010-1234-1234
                            </td>
                            <td>
                                총 결제금액 &nbsp;
                                <span className="red">
                                    36.000
                                </span>
                                원
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </article>
            <article className="deliveryCompleteInfoForm">
                <h5 className="deliveryCompleteInfoText">
                    주문정보
                </h5>
                <Table className="deliveryCompleteInfoTable">
                    <tbody>
                        <tr>
                            <td>
                                수취인/연락처
                            </td>
                            <td>
                                홍길동 / 010-1234-1234
                            </td>
                            <td>
                                <div>{`주문 아이디: ${searchParams.get("orderId")}`}</div>
                                <div>{`결제 금액: ${Number(
                                    searchParams.get("amount")
                                ).toLocaleString()}원`}</div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                배송지 주소
                            </td>
                            <td>
                                부산광역시 광안동 123-1234 22층
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </article>
        </section>
    )
}
export default MenuOrderComplete;