import axiosClient from './axiosClient';

export const appApi = {
  getAll(params) {
    return axiosClient.get('/admin/blogs', { params });
  },
};
