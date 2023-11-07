import { Link } from 'react-router-dom';
import logo from '../images/LomDDeock_logo.jpg';
import '../css/layout.css';
function AdminHeader() {
    return (
        <header className="adminHeader">
            <Link to="/"><img src={logo} alt="로고" /></Link>
            <Link to="/admin/adminIndex"><div className="adminFontLogo">ADMIN</div></Link>
            <div className="adminLogout"><a>로그아웃</a></div>
        </header>
    )
}

export default AdminHeader;