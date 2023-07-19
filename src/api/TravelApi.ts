import axios from 'axios';

const TravelApi = axios.create({
  baseURL: 'http://apis.data.go.kr/B551011/KorService1',
  headers: {
    'Content-Type': 'application/json',
  },
});

TravelApi.interceptors.response.use(
  response => {
    if (response.status !== 200) {
      console.log('api error');
    }
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default TravelApi;
