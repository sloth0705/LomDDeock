import React, { useState, useEffect } from 'react';
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
import blank from "../../images/menu/blank.svg";
import axios from "axios";

function Card (){
    // 데이터 호출
    const [listData, setListData] = useState([]); // 현재 게시글 목록

    // useEffect로 한번 실행된 데이터를 빈배열에 담게 해 무한반복 방지
    useEffect(()=>{
        axios.get(`/api/main/list`)
            .then(response=>{
                setListData(response.data);
            })
            .catch(err=>{
                console.error("데이터를 찾을 수 없습니다. error : " + err);
            });
    },[]);
    return (
        <>
            <Card style={{ width: '18rem' }} className="item-card">
                <Link to="/menu/menuView" className="reset-a">
                    <Card.Img variant="top" src={blank}/>
                    <Card.Body>
                        <Card.Title className="menuTitle">
                            떡볶이
                        </Card.Title>
                        <Card.Text className="menuPrice">
                            30000원
                        </Card.Text>
                    </Card.Body>
                </Link>
            </Card>
        </>
    );

}
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
                <Tab eventKey="side" title="사이드">
                    <SideMenu/>
                </Tab>
                <Tab eventKey="topping" title="음료">
                    <ToppingMenu/>
                </Tab>
            </Tabs>
        </section>
    )
}

export default MenuList;