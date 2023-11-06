import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
const Main = lazy(() => import('./pages/main/Main'))
const MyInfo = lazy(() => import('./pages/my/Info'))
const Login = lazy(() => import('./pages/user/Login'))
const Signup = lazy(() => import('./pages/user/Signup'))
const Register = lazy(() => import('./pages/user/Register'))
const MenuList = lazy(() => import('./pages/menu/MenuList'))
const MenuView = lazy(() => import('./pages/menu/MenuView'))
const MenuCart = lazy(() => import('./pages/menu/MenuCart'))
const MenuOrder = lazy(() => import('./pages/menu/MenuOrder'))

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
                <Route path="/signup" element={
                <Suspense fallback={fallBackData()}>
                    <Signup />
                </Suspense>} />
                <Route path="/register" element={
                <Suspense fallback={fallBackData()}>
                    <Register />
                </Suspense>} />
                <Route path="/menu/menuList" element={
                <Suspense fallback={fallBackData()}>
                    <MenuList/>
                </Suspense>} />
                <Route path="/menu/menuView" element={
                <Suspense fallback={fallBackData()}>
                    <MenuView/>
                </Suspense>} />
                <Route path="/menu/menuCart" element={
                <Suspense fallback={fallBackData()}>
                    <MenuCart/>
                </Suspense>} />
                <Route path="/menu/menuOrder" element={
                <Suspense fallback={fallBackData()}>
                    <MenuOrder/>
                </Suspense>} />
                <Route path="/myInfo" element={
                <Suspense fallback={fallBackData()}>
                    <MyInfo />
                </Suspense>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;