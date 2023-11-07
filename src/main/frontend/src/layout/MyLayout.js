import React, {Suspense} from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function MyLayout({ children }) {
    function fallBackData() {
        return <div>로딩중</div>;
    }
    return (
        <>
            {children}
        </>
    )
}
export default MyLayout;