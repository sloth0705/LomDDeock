import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom";
import Header from './layout/Header';
import AdminHeader from './layout/AdminHeader';
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
const AdminIndex = lazy(() => import('./pages/admin/adminIndex'))
const MenuCart = lazy(() => import('./pages/menu/MenuCart'))
const Introduce = lazy(() => import('./pages/brand/Introduce'))
const MenuOrder = lazy(() => import('./pages/menu/MenuOrder'))
const MenuLayout = lazy(() => import('./layout/MenuLayout'))
const UserLayout = lazy(() => import('./layout/UserLayout'))
const MyLayout = lazy(() => import('./layout/MyLayout'))
const AdminLayout = lazy(() => import('./layout/AdminLayout'))
function fallBackData() {
    return <div>로딩중</div>;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={
                <Suspense fallback={fallBackData()}>
                    <Header />
                    <Main />
                    <Footer />
                </Suspense>} />
                <Route path="/introduce" element={
                <Suspense fallback={fallBackData()}>
                    <Introduce />
                </Suspense>} />
                {/* 메뉴 페이지 */}
                <Route path="/menu/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header />
                        <MenuLayout>
                            <Routes>
                                <Route path="/menuList" element={<MenuList />} />
                                <Route path="/menuView" element={<MenuView />} />
                                <Route path="/menuCart" element={<MenuCart />} />
                                <Route path="/menuOrder" element={<MenuOrder />} />
                            </Routes>
                        </MenuLayout>
                        <Footer />
                    </Suspense>
                  } />
                {/* 사용자 페이지 */}
                <Route path="/user/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <UserLayout>
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/signup" element={<Signup />} />
                                <Route path="/register" element={<Register />} />
                                <Route path="/confirmEmail" element={<ConfirmEmail />} />
                            </Routes>
                        </UserLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 마이 페이지 */}
                <Route path="/my/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <MyLayout>
                            <Routes>
                                <Route path="/myInfo" element={<MyInfo />} />
                                <Route path="/myCoupon" element={<MyCoupon />} />
                                <Route path="/myOrder" element={<MyOrder />} />
                                <Route path="/myPick" element={<MyPick />} />
                                <Route path="/myQnaList" element={<MyQnaList />} />
                                <Route path="/myQnaView" element={<MyQnaView />} />
                            </Routes>
                        </MyLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 관리자 페이지 */}
                <Route path="/admin/*" element={
                    <Suspense fallback={fallBackData()}>
                        <AdminHeader/>
                        <AdminLayout>
                            <Routes>
                                <Route path="/adminIndex" element={<AdminIndex />} />
                            </Routes>
                        </AdminLayout>
                        <Footer/>
                    </Suspense>
                  } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;