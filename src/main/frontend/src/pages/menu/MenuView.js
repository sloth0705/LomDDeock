import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Tab, Tabs, Button, ButtonGroup, ToggleButton, Form} from 'react-bootstrap';
import '../../css/menu/menuView.css';
import blank from '../../images/blank.png';
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
                    <p className="sizeDescription">
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
                    <p className="spicyDescription">
                        맵기 선택
                    </p>
                    <Form>
                        {spicyLevels.map((spicy) => (
                            <Form.Check
                                type={'radio'}
                                id={'spicy-' + spicy.value}
                                name='spicyLevel'
                                label={spicy.name}>
                            </Form.Check>
                        ))}
                    </Form>
                </article>
                <article className="selectTopping">
                    <p className="toppingDescription">
                        토핑 선택
                    </p>
                </article>
            </section>
        </section>
    )
}

export default MenuView;