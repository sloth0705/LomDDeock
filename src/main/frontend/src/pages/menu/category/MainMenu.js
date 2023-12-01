import { Button, Card } from 'react-bootstrap';
import blank from '../../../images/menu/blank.svg';
import spicy9 from '../../../images/menu/img_spicystep9.png';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import React from "react";
import MenuPagination from "../../admin/menu/proc/MenuPagination";


function MainMenu({listData}) {
    return (
        <section className="tabMenuList">
            <h1 className="tabCategory">
                MAIN MENU
            </h1>
            {listData.map((item, index)=>(
                <Card key={index} style={{ width: '18rem' }} className="item-card">
                    <Link to="/menu/menuView" className="reset-a">
                        <Card.Img variant="top" src={`/thumbs/${item.thumb}`}/>
                        <Card.Body>
                            <Card.Title className="menuTitle">
                                {item.menuName}
                            </Card.Title>
                            <Card.Text className="menuPrice">
                                {item.price}원
                            </Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            ))}
        </section>

    )
}

export default MainMenu;