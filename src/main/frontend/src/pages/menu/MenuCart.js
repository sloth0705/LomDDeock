import React from 'react';
import { Link } from "react-router-dom";
import '../../css/menu/menuCart.css';
import { Table, Form, Image, Button } from 'react-bootstrap';
import blank from '../../images/blank.png';
function MenuCart() {
    {/* 장바구니에 상품이 없을경우 상품이 없습니다를 보여주기 위한 플래그값 */}
    const flag = false;
    return(
        <section className="menuCart">
            <section className="cartArea">
                <h2 className="cartText">
                    장바구니
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
                        {!flag ? (
                            <tr>
                                <td colspan="7">
                                    장바구니에 상품이 없습니다.
                                </td>
                            </tr>
                        ) : null}
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
                <Button variant="danger">선택삭제</Button>
            </section>
            <section className="cartOrderArea">
                <h5 className="cartOrderText">
                    전체합계
                </h5>
                <article className="cartOrderForm">
                    <Table className="cartOrderTable">
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
                    <Link to="/menu/menuOrder">
                        <Button variant="danger" className="cartOrderButton">
                            주문하기
                        </Button>
                    </Link>
                </article>
            </section>
        </section>
    )
}

export default MenuCart;