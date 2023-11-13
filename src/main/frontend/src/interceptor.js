import axios from 'axios';

// request interceptor
axios.interceptors.request.use(
    function(request) {
        const token = localStorage.getItem('token');
        if (token && token != 'undefined') {
            // 토큰이 존재한다면 헤더에 추가
            request.headers.Authorization = token;
        }
        return request;
    },
    function (error) {
        return Promise.reject(error);
    }
);


export default axios;
