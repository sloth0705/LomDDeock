import React, {useEffect, useState, lazy, Suspense} from 'react';
import axios from 'axios';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Header from './layout/Header';
import Footer from './layout/Footer';
const Main = lazy(() => import('./pages/main/Main'))
const MyInfo = lazy(() => import('./pages/my/Info'))

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
                <Route path="/home" element={
                <Suspense fallback={fallBackData()}>
                    <Link to="/">Go to /</Link>
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