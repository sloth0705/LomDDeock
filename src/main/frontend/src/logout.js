import { removeCookieToken } from './storage/Cookie';
import { useDispatch, useSelector } from "react-redux";
const logout = async () => {
    removeCookieToken();
    localStorage.removeItem('token')
    localStorage.removeItem("email")
}

export default logout;