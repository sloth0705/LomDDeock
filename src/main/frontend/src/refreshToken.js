import axios from 'axios';

const refreshToken = async () => {
  try {
    const response = await axios.post('/api/refreshToken');
    localStorage.setItem("token", response.data.accessToken);
    console.log('accessToken: ' + response.data.accessToken);
  } catch (error) {
    return false;
  }
};

export default refreshToken;
