import axios from 'axios';

const getQnaView = async (cno) => {
    const resp = await axios.get(`/api/getQnaView?cno=${cno}`);
    return resp.data;
}

export { getQnaView }