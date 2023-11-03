import React, { useState } from 'react';
import { Button, ButtonGroup, ToggleButton, Form, Image, InputGroup, Table, Tabs, Tab } from 'react-bootstrap';
import '../../css/menu/menuView.css';
import blank from '../../images/blank.png';
import topping1 from '../../images/menu/Topping1.jpg';
import topping2 from '../../images/menu/Topping2.jpg';
import special1 from '../../images/menu/special1.jpg';
function MenuView() {
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'L 40,000', value: '1' },
        { name: 'M 35,000', value: '2' },
    ];
    const spicyLevels = [
        {name: '어린이맛', value: '1'},
        {name: '착한맛', value: '2'},
        {name: '오리지널', value: '3'},
        {name: '쏘핫', value: '4'},
        {name: '쏘쏘핫', value: '5'}
    ];

    return (
        <section className="menuView">
            <img src={blank} className="thumb"/>
            <section className="menuSelection">
                <h2 className="menuName">
                    떡볶이
                </h2>
                <p className="menuDescription">
                    설명떡볶이떡볶이설명설명떡볶이
                </p>
                <article className="selectSize">
                    <p className="description">
                        사이즈 선택
                    </p>
                    <ButtonGroup>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                                name="radio"
                                className="menuSizeButton"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => setRadioValue(e.currentTarget.value)}>
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </article>
                <article className="selectSpicy">
                    <p className="description">
                        맵기 선택
                    </p>
                    <Form>
                        {spicyLevels.map((spicy, index) => (
                            <Form.Check
                                type={'radio'}
                                id={'spicy-' + spicy.value}
                                name='spicyLevel'
                                label={spicy.name}
                                defaultChecked={index === 0}>
                            </Form.Check>
                        ))}
                    </Form>
                </article>
                <article className="selectTopping">
                    <p className="description">
                        토핑 선택
                    </p>
                    <Table className="toppingTable">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="toppingThumbArea">
                                    <Image src={topping1} roundedCircle className="toppingThumb"/>
                                </td>
                                <td className="toppingInfoArea">
                                    <p>
                                        치즈 100g
                                    </p>
                                    <h5>
                                        3,000
                                    </h5>
                                </td>
                                <td className="toppingCountArea">
                                    <InputGroup className="topping">
                                        <Button variant="outline-secondary" id="button-addon1" className="toppingButton">
                                            -
                                        </Button>
                                        <Form.Control
                                            type="text"
                                            aria-label="1"
                                            aria-describedby="basic-addon1"
                                            className="toppingCount"
                                            disabled
                                            readOnly
                                        />
                                        <Button variant="outline-secondary" id="button-addon2" className="toppingButton">
                                            +
                                        </Button>
                                    </InputGroup>
                                </td>
                            </tr>
                            <tr>
                                <td className="toppingThumbArea">
                                    <Image src={topping2} roundedCircle className="toppingThumb"/>
                                </td>
                                <td className="toppingInfoArea">
                                    <p>
                                        올리브
                                    </p>
                                    <h5>
                                        500
                                    </h5>
                                </td>
                                <td className="toppingCountArea">
                                    <InputGroup className="topping">
                                        <Button variant="outline-secondary" id="button-addon1" className="toppingButton">
                                            -
                                        </Button>
                                        <Form.Control
                                            type="text"
                                            aria-label="1"
                                            aria-describedby="basic-addon1"
                                            className="toppingCount"
                                            disabled
                                            readOnly
                                        />
                                        <Button variant="outline-secondary" id="button-addon2" className="toppingButton">
                                            +
                                        </Button>
                                    </InputGroup>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </article>
                <article className="selectItemCount">
                    <p className="description">
                        수량 선택
                    </p>
                    <InputGroup className="item">
                        <Button variant="outline-secondary" id="button-addon1" className="itemButton">
                            -
                        </Button>
                        <Form.Control
                            type="text"
                            aria-label="1"
                            aria-describedby="basic-addon1"
                            className="itemCount"
                            disabled
                            readOnly
                        />
                        <Button variant="outline-secondary" id="button-addon2" className="itemButton">
                            +
                        </Button>
                    </InputGroup>
                </article>
                <article className="selectSide">
                    <p className="description">
                        사이드 디시
                    </p>
                    <Tabs
                        defaultActiveKey="special"
                        id="uncontrolled-tab-example"
                        className="mb-3 sideTabs">
                        <Tab eventKey="special" title="특가" className="sideTab">
                            <Table className="toppingTable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={special1} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                사이드 메뉴1
                                            </p>
                                            <del className="sideSpecialDel">
                                                3,500
                                            </del>
                                            <strong className="sideSpecialStrong">
                                                3,000
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    disabled
                                                    readOnly
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={special1} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                사이드 메뉴1
                                            </p>
                                            <del className="sideSpecialDel">
                                                3,500
                                            </del>
                                            <strong className="sideSpecialStrong">
                                                3,000
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    disabled
                                                    readOnly
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={special1} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                사이드 메뉴1
                                            </p>
                                            <del className="sideSpecialDel">
                                                3,500
                                            </del>
                                            <strong className="sideSpecialStrong">
                                                3,000
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    disabled
                                                    readOnly
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={special1} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                사이드 메뉴1
                                            </p>
                                            <del className="sideSpecialDel">
                                                3,500
                                            </del>
                                            <strong className="sideSpecialStrong">
                                                3,000
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    disabled
                                                    readOnly
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={special1} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                사이드 메뉴1
                                            </p>
                                            <del className="sideSpecialDel">
                                                3,500
                                            </del>
                                            <strong className="sideSpecialStrong">
                                                3,000
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    disabled
                                                    readOnly
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                        <Tab eventKey="default" title="일반"  className="sideTab">
                            <Table className="toppingTable">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="sideThumbArea">
                                            <Image src={special1} className="toppingThumb"/>
                                        </td>
                                        <td className="sideInfoArea">
                                            <p>
                                                사이드 메뉴1
                                            </p>
                                            <strong className="sideSpecialStrong">
                                                3,000
                                            </strong>
                                        </td>
                                        <td className="sideCountArea">
                                            <InputGroup className="side">
                                                <Button variant="outline-secondary" id="button-addon1" className="sideButton">
                                                    -
                                                </Button>
                                                <Form.Control
                                                    type="text"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon1"
                                                    className="sideCount"
                                                    disabled
                                                    readOnly
                                                />
                                                <Button variant="outline-secondary" id="button-addon2" className="sideButton">
                                                    +
                                                </Button>
                                            </InputGroup>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                    </Tabs>
                </article>
            </section>
        </section>
    )
}

export default MenuView;