import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
const Main = lazy(() => import('./pages/main/Main'))
const Login = lazy(() => import('./pages/user/Login'))
const MenuList = lazy(() => import('./pages/menu/MenuList'))
const MenuView = lazy(() => import('./pages/menu/MenuView'))

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

                <Route path="/login" element={
                <Suspense fallback={fallBackData()}>
                    <Login />
                </Suspense>} />
                <Route path="/menu/menuList" element={
                <Suspense fallback={fallBackData()}>
                    <MenuList/>
                </Suspense>} />
                <Route path="/menu/menuView" element={
                <Suspense fallback={fallBackData()}>
                    <MenuView/>
                </Suspense>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;