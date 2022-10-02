import axios from 'axios';


const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout : 3 * 1000,
  
});


export default axiosClient;
