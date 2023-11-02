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
            </section>
        </section>
    )
}

export default MenuView;