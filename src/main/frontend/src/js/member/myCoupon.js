import axios from 'axios';

const getMyCouponCount = async () => {
    const resp = await axios.get('/api/getMyCouponCount');
    return resp.data;
}

const getMyCouponList = async (pg) => {
    const resp = await axios.get(`/api/getMyCouponList?pg=${pg}`);
    return resp.data;
}

export { getMyCouponCount, getMyCouponList };