import { removeCookieToken } from './storage/Cookie';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
const logout = async () => {
    const token = localStorage.getItem('kakao_token');
    const resp = await axios.post(
            'https://kapi.kakao.com/v1/user/logout',
            {},
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Bearer ' + token
                }
            }
        );
    removeCookieToken();
    localStorage.removeItem("email")
    localStorage.removeItem('token')
    localStorage.removeItem('kakao_token')
}

export default logout;