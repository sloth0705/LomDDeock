import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import { Tab, Tabs, Button, Stack, Nav, Navbar, NavDropdown, Form, InputGroup, Container, Row, Col } from 'react-bootstrap';
import '../../css/menu/menuList.css';
import blankImage from '../../images/blank.png';
import MainMenu from './category/MainMenu';
import ChickenMenu from './category/ChickenMenu';
import SetMenu from './category/SetMenu';
import SideMenu from './category/SideMenu';
import ToppingMenu from './category/ToppingMenu';
import MealKitMenu from './category/MealKitMenu';

function MenuList() {
    return (
        <section className="menuList">
            <Tabs
                defaultActiveKey="main"
                id="uncontrolled-tab-example"
                className="mb-3">
                <Tab eventKey="main" title="메인메뉴">
                    <MainMenu/>
                </Tab>
                <Tab eventKey="chicken" title="닭발메뉴">
                    <ChickenMenu/>
                </Tab>
                <Tab eventKey="set" title="세트메뉴">
                    <SetMenu/>
                </Tab>
                <Tab eventKey="side" title="사이드/음료">
                    <SideMenu/>
                </Tab>
                <Tab eventKey="topping" title="토핑">
                    <ToppingMenu/>
                </Tab>
                <Tab eventKey="mealKit" title="밀키트">
                    <MealKitMenu/>
                </Tab>
            </Tabs>
        </section>
    )
}

export default MenuList;