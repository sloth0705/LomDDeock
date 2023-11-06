import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
const Main = lazy(() => import('./pages/main/Main'))
const MyInfo = lazy(() => import('./pages/my/Info'))
const MyCoupon = lazy(() => import('./pages/my/Coupon'))
const MyOrder = lazy(() => import('./pages/my/Order'))
const MyPick = lazy(() => import('./pages/my/Pick'))
const MyQnaList = lazy(() => import('./pages/my/QnaList'))
const MyQnaView = lazy(() => import('./pages/my/QnaView'))
const Login = lazy(() => import('./pages/user/Login'))
const Signup = lazy(() => import('./pages/user/Signup'))
const Register = lazy(() => import('./pages/user/Register'))
const ConfirmEmail = lazy(() => import('./pages/user/ConfirmEmail'))
const MenuList = lazy(() => import('./pages/menu/MenuList'))
const MenuView = lazy(() => import('./pages/menu/MenuView'))
const MenuCart = lazy(() => import('./pages/menu/MenuCart'))

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
                <Route path="/confirmemail" element={
                <Suspense fallback={fallBackData()}>
                    <ConfirmEmail />
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
                <Route path="/my/myInfo" element={
                <Suspense fallback={fallBackData()}>
                    <MyInfo />
                </Suspense>} />
                <Route path="/my/myCoupon" element={
                    <Suspense fallback={fallBackData()}>
                        <MyCoupon />
                    </Suspense>} />
                <Route path="/my/myOrder" element={
                    <Suspense fallback={fallBackData()}>
                        <MyOrder />
                    </Suspense>} />
                <Route path="/my/myOrder" element={
                    <Suspense fallback={fallBackData()}>
                        <MyOrder />
                    </Suspense>} />
                <Route path="/my/myPick" element={
                    <Suspense fallback={fallBackData()}>
                        <MyPick />
                    </Suspense>} />
                <Route path="/my/myQnaList" element={
                    <Suspense fallback={fallBackData()}>
                        <MyQnaList />
                    </Suspense>} />
                <Route path="/my/MyQnaView" element={
                    <Suspense fallback={fallBackData()}>
                        <MyQnaView />
                    </Suspense>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;