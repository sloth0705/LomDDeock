import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom";

/* 헤더, 푸터 */
import Header from './layout/Header';
import AdminHeader from './layout/AdminHeader';
import Footer from './layout/Footer';

/* 페이지 레이아웃 */
const MenuLayout = lazy(() => import('./layout/MenuLayout'))
const UserLayout = lazy(() => import('./layout/UserLayout'))
const MyLayout = lazy(() => import('./layout/MyLayout'))
const AdminLayout = lazy(() => import('./layout/AdminLayout'))
const BrandLayout = lazy(() => import('./layout/BrandLayout'))

/* 메인 페이지 */
const Main = lazy(() => import('./pages/main/Main'))

/* 마이페이지 */
const MyInfo = lazy(() => import('./pages/my/Info'))
const MyCoupon = lazy(() => import('./pages/my/Coupon'))
const MyOrder = lazy(() => import('./pages/my/Order'))
const MyPick = lazy(() => import('./pages/my/Pick'))
const MyQnaList = lazy(() => import('./pages/my/QnaList'))
const MyQnaView = lazy(() => import('./pages/my/QnaView'))

/* 사용자 페이지 */
const Login = lazy(() => import('./pages/user/Login'))
const Signup = lazy(() => import('./pages/user/Signup'))
const Register = lazy(() => import('./pages/user/Register'))
const ConfirmEmail = lazy(() => import('./pages/user/ConfirmEmail'))

/* 상품 메뉴 페이지 */
const MenuList = lazy(() => import('./pages/menu/MenuList'))
const MenuView = lazy(() => import('./pages/menu/MenuView'))
const AdminIndex = lazy(() => import('./pages/admin/AdminIndex'))
const MenuCart = lazy(() => import('./pages/menu/MenuCart'))
const MenuOrder = lazy(() => import('./pages/menu/MenuOrder'))
const MenuComplete = lazy(() => import('./pages/menu/MenuComplete'))

/* 브랜드 페이지 */
const Introduce = lazy(() => import('./pages/brand/Introduce'))

/* 고객센터 페이지 */
const CsNotice = lazy(() => import('./pages/cs/CsNotice'))
const CsEventList = lazy(() => import('./pages/cs/CsEventList'))
const CsEventView = lazy(() => import('./pages/cs/CsEventView'))
const CsFaq = lazy(() => import('./pages/cs/CsFaq'))
const CsQnaList = lazy(() => import('./pages/cs/CsQnaList'))
const CsQnaWrite = lazy(() => import('./pages/cs/CsQnaWrite'))
const CsQnaView = lazy(() => import('./pages/cs/CsQnaView'))
/* 로딩중 표시 */
function fallBackData() {
    return <div>로딩중</div>;
}

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                {/* 메인 페이지 */}
                <Route path="/" element={
                <Suspense fallback={fallBackData()}>
                    <Header />
                    <Main />
                    <Footer />
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
                                <Route path="/menuComplete" element={<MenuComplete />} />
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
                {/* 브랜드 페이지 */}
                <Route path="/brand/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <BrandLayout>
                            <Routes>
                                <Route path="/introduce" element={<Introduce />} />
                            </Routes>
                        </BrandLayout>
                        <Footer/>
                    </Suspense>
                  } />
                {/* 고객센터 페이지 */}
                <Route path="/cs/*" element={
                    <Suspense fallback={fallBackData()}>
                        <Header/>
                        <BrandLayout>
                            <Routes>
                                <Route path="/CsNotice" element={<CsNotice />} />
                                <Route path="/CsEventList" element={<CsEventList />} />
                                <Route path="/CsEventView" element={<CsEventView />} />
                                <Route path="/CsFaq" element={<CsFaq />} />
                                <Route path="/CsQnaList" element={<CsQnaList />} />
                                <Route path="/CsQnaWrite" element={<CsQnaWrite />} />
                                <Route path="/CsQnaView" element={<CsQnaView />} />
                            </Routes>
                        </BrandLayout>
                        <Footer/>
                    </Suspense>
                  } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;