import axios from 'axios';

const getQnaList = async(pg, cateNo) => {
    const resp = await axios.get(`/api/getQnaList?pg=${pg}&cateNo=${cateNo}`);
    return resp.data;
}

const getQnaCate = async () => {
    const resp = await axios.get('/api/getQnaCate');
    return resp.data;
}

export { getQnaList, getQnaCate }