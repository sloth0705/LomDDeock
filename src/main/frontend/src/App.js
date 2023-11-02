import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
const Main = lazy(() => import('./pages/main/Main'))
const MenuList = lazy(() => import('./pages/menu/MenuList'))

function fallBackData() {
    <div>로딩중</div>
}

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                {/*메인 페이지*/}
                <Route path="/" element={
                <Suspense fallback={fallBackData()}>
                    <Main />
                </Suspense>} />
                <Route path="/menu/menuList" element={
                <Suspense fallback={fallBackData()}>
                    <MenuList/>
                </Suspense>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;