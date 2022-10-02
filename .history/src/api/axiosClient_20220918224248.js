import axios from 'axios';
import queryString from 'query-string';

// import { doLogout } from 'features/Auth/authSlice';
import { Notification } from 'components';
import { handleErrorMessage } from 'utils';

const axiosClient = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  timeout: 30000,
  paramsSerializer: (params) =>
    queryString.stringify(params, {
      skipNull: true,
      skipEmptyString: true,
    }),
});

const httpService = {
  setupInterceptors: (store) => {
    axiosClient.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("token");

        if (token) {
          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    axiosClient.interceptors.response.use(
      (response) => {
        // if (response.data?.data) {
        //   return response.data.data;
        // }

        return response.data;
      },
      (error) => {
        const errorMessage = handleErrorMessage(error.response || error);
        console.log('errorMessage: ', errorMessage);

        if (error.response) {
          const { config, status } = error.response;
          const URLs = ['/admin/verifyToken'];
          if (
            !URLs.includes(config.url) &&
            (status === 401 || status === 403)
          ) {
            // store.dispatch(doLogout());
          }
        }

        Notification('error', errorMessage.message);

        return Promise.reject(errorMessage);
      },
    );
  },
};

export default axiosClient;
export { httpService };
