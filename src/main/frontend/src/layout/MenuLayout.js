import React, {useEffect, useState, lazy, Suspense} from 'react';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom";
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function MenuLayout({ children }) {
    function fallBackData() {
        return <div>로딩중</div>;
    }
    return (
        <>
            {children}
        </>
    )
}
export default MenuLayout;